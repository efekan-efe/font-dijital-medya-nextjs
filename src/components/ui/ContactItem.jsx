const ContactItem = ({ icon: Icon, children }) => {
  return (
    <div className="flex items-center gap-x-2 text-sm">
      <Icon className="h-5 w-5 text-white" />
      <span className="text-white hover:opacity-80 transition-opacity">{children}</span>
    </div>
  );
};

export default ContactItem;
