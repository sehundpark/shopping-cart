export const HomePage = () => {
  return (
    <div className="home-page">
      <h2 className="homepage-header">Welcome! Take a look around..</h2>
      <p className="homepage-text">
        Start Shopping! This website serves as a practice project to demonstrate
        my skills for the following:
        <ul className="homepage-text-list">
          <li>Browse a list of products fetched from an external API</li>
          <li>Add products to the cart with specified quantities</li>
          <li>View and manage the shopping cart</li>
          <li>Real-time cart total and item count updates</li>
          <li>Sliding notifications for user actions</li>
        </ul>
      </p>
    </div>
  );
};
