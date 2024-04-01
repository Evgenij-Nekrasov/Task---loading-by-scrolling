interface propsButton {
   children?: React.ReactNode;
}

const Button = ({ children }: propsButton) => {
   return <button>{children}</button>;
};

export default Button;
