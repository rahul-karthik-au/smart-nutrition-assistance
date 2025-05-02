import React, { useState, ChangeEvent, FC } from 'react';
import styles from './VerificationModal.module.css';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (code: string) => void;
}

const VerificationModal: FC<VerificationModalProps> = ({ isOpen, onClose, onVerify }) => {
  const [code, setCode] = useState<string>('');

  if (!isOpen) return null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleSubmit = () => {
    if (code.trim().length === 6) {
      onVerify(code);
      setCode('');
    } else {
      alert('Please enter a 6-digit code');
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Enter Verification Code</h2>
        <input
          type="text"
          value={code}
          onChange={handleChange}
          maxLength={6}
          placeholder="6-digit code"
          className={styles.input}
        />
        <div className={styles.buttonRow}>
          <button onClick={onClose} className={styles.cancelButton}>Cancel</button>
          <button onClick={handleSubmit} className={styles.verifyButton}>Verify</button>
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
