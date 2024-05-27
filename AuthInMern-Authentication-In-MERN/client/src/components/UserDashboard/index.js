import React, { useState } from 'react';
import styles from "./styles.module.css";

const UserDashboard = () => {
  const [balance, setBalance] = useState(0);
  const [pin, setPin] = useState('1234');
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const handleDeposit = () => {
    setPopupContent(<DepositForm deposit={depositAmount} />);
    setShowPopup(true);
  };

  const handleFastCash = (amount) => {
    setPopupContent(<FastCashForm amount={amount} withdraw={withdrawAmount} />);
    setShowPopup(true);
  };

  const handlePinChange = () => {
    setPopupContent(<PinChangeForm changePin={changePin} />);
    setShowPopup(true);
  };

  const handleCashWithdrawal = () => {
    setPopupContent(<CashWithdrawalForm withdraw={withdrawAmount} />);
    setShowPopup(true);
  };

  const handleBalanceEnquiry = () => {
    setPopupContent(<BalanceEnquiry balance={balance} />);
    setShowPopup(true);
  };

  const depositAmount = (amount, enteredPin) => {
    if (enteredPin === pin) {
      setBalance(balance + amount);
      setPopupContent(<MessageBox message={`Deposited successfully. Your balance is $${balance + amount}`} />);
    } else {
      setPopupContent(<MessageBox message="Incorrect pin" />);
    }
  };

  const changePin = (oldPin, newPin) => {
    if (oldPin === pin) {
      setPin(newPin);
      setPopupContent(<MessageBox message="Pin changed successfully" />);
    } else {
      setPopupContent(<MessageBox message="Incorrect pin" />);
    }
  };

  const withdrawAmount = (amount, enteredPin) => {
    if (enteredPin === pin) {
      if (amount <= balance) {
        setBalance(balance - amount);
        setPopupContent(<MessageBox message={`Successfully withdrawn $${amount}. Your balance is $${balance - amount}`} />);
      } else {
        setPopupContent(<MessageBox message="Insufficient balance" />);
      }
    } else {
      setPopupContent(<MessageBox message="Incorrect pin" />);
    }
  };

  return (
    <div className={styles["dashboard-container"]}>
      <div className={styles.greeting}>Welcome Back!, Mr. Thirukumaran G</div>
      <div className={styles["atm-machine"]}>
        <div className={styles.options}>
          <div className={styles.option} onClick={handleDeposit}>Deposit</div>
          <div className={styles.option} onClick={() => handleFastCash(100)}>Fast Cash $100</div>
          <div className={styles.option} onClick={() => handleFastCash(500)}>Fast Cash $500</div>
          <div className={styles.option} onClick={() => handleFastCash(1000)}>Fast Cash $1000</div>
          <div className={styles.option} onClick={handlePinChange}>Pin Change</div>
          <div className={styles.option} onClick={handleCashWithdrawal}>Cash Withdrawal</div>
          <div className={styles.balanceEnquiryPlaceholder}></div>
          <div className={styles.option} onClick={handleBalanceEnquiry}>Balance Enquiry</div>
          <div className={styles.balanceEnquiryPlaceholder}></div>
        </div>
      </div>
      {showPopup && <PopupBox content={popupContent} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

const PopupBox = ({ content, onClose }) => {
  return (
    <div className={styles["popup-container"]}>
      <div className={styles.popup}>
        <div className={styles["popup-navbar"]}>
          <button className={styles.minimizeButton} onClick={onClose}>-</button>
          <button className={styles.closeButton} onClick={onClose}>x</button>
        </div>
        <div className={styles["popup-content"]}>
          {content}
        </div>
      </div>
    </div>
  );
};

const DepositForm = ({ deposit }) => {
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    deposit(parseFloat(amount), pin);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" required />
      <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="Enter pin" required />
      <button type="submit">Deposit</button>
    </form>
  );
};

const PinChangeForm = ({ changePin }) => {
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    changePin(oldPin, newPin);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="password" value={oldPin} onChange={(e) => setOldPin(e.target.value)} placeholder="Enter old pin" required />
      <input type="password" value={newPin} onChange={(e) => setNewPin(e.target.value)} placeholder="Enter new pin" required />
      <button type="submit">Change Pin</button>
    </form>
  );
};

const CashWithdrawalForm = ({ withdraw }) => {
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    withdraw(parseFloat(amount), pin);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" required />
      <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="Enter pin" required />
      <button type="submit">Withdraw</button>
    </form>
  );
};

const FastCashForm = ({ amount, withdraw }) => {
  const [pin, setPin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    withdraw(amount, pin);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Fast Cash Amount: ${amount}</p>
      <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="Enter pin" required />
      <button type="submit">Withdraw</button>
    </form>
  );
};

const BalanceEnquiry = ({ balance }) => {
  return <p>Your balance is ${balance}</p>;
};

const MessageBox = ({ message }) => {
  return <p>{message}</p>;
};

export default UserDashboard;
