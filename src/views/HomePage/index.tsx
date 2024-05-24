type HomeProps = {
  className: string;
};

const HomePage = ({ className }: HomeProps): JSX.Element => {
  return (
    <main className={className}>
      <div className="titleWrapper">
        <div className="titleContainer">
          <p>Custom Software Development company</p>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
