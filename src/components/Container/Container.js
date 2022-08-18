import s from './Container.module.css';

const Container = ({ children }) => <div className={s.wrapper}>{children}</div>;

export default Container;
