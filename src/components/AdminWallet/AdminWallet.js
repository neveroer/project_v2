import s from './AdminWallet.module.css';

function AdminWallet({ children }) {
  return (
    <section>
      <div>
        <h2 className={s.title}>Admin</h2>
        {children}
      </div>
    </section>
  );
}

export default AdminWallet;
