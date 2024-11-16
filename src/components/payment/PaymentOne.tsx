import React from "react";
import { Modal } from "antd";

function PaymentOne({ onClose }) {
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal
      title={<p>Recharge</p>}
      open={true} // Always open since it's managed by DropdownOne
      onCancel={onClose}
    >
      {loading ? <p>Loading...</p> : <p>Payment contents here...</p>}
    </Modal>
  );
}

export default PaymentOne;
