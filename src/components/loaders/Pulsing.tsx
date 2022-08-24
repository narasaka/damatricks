const Pulsing: React.FC = () => {
  return (
    <div className="bg-violet-300 rounded-full w-8 h-8 relative">
      <div className="bg-violet-400 rounded-full w-8 h-8 animate-ping absolute top-0 right-0 bottom-0 left-0" />
    </div>
  );
};

export default Pulsing;
