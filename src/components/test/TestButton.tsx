const TestButton = () => {
  const testClick = () => {
    console.log("testClick");
  };
  console.log();
  return (
    <button onClick={testClick} className="rounded-3xl w-[200]">
      TestButton
    </button>
  );
};

export default TestButton;
