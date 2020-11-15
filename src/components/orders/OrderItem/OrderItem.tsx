import React from 'react';
import Order from '../Order';

type OrderProp = {
  from: string;
  to: string;
  price: number;
  id: number;
  createdAt: number;
};

interface Props {
  order: OrderProp;
  onDelete: () => void;
}

const OrderItem: React.FC<Props> = ({ order, onDelete }) => {
  const { id, createdAt, from, to, price } = order;

  return (
    <div style={{ marginBottom: 20 }} data-testid='order-item'>
      <Order {...{ id, createdAt, from, to, price }} />
      <button type='button' data-testid='delete-button' onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default OrderItem;
