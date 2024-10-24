export default function About() {
  return (
    <div className="container">
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>About Us</h1>
          <p className="lead">Learn more about our team and mission</p>
        </div>
      </header>

      <main className="container my-5">
        <section className="mb-5">
          <h2>Rating App</h2>
          <p>
            This project is a React-based Store Rating Application that allows
            users to browse through a list of stores, view store details such as
            name, address, and average rating, and submit their own ratings. The
            interface is designed with a modern and responsive UI using CSS and
            features store images, a clean card layout, and a star rating
            system. Users can rate each store, and the application dynamically
            updates the ratings for a seamless user experience. This project is
            ideal for building a store review platform with a visually
            appealing, user-friendly design.
          </p>
        </section>

        <section className="mb-5">
          <h2>Meet Our Team</h2>
          <div className="row">
            <div className="col-md-4 team-member text-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member"
                className="img-fluid mb-3"
              />
              <h3>John Doe</h3>
              <p className="text-muted">CEO & Founder</p>
            </div>
            <div className="col-md-4 team-member text-center">
              <img
                src="https://media.istockphoto.com/id/1702492633/photo/beautiful-and-happy-smiling-asian-young-girl-from-nepal-giving-several-gestures-in-a-formal.jpg?s=1024x1024&w=is&k=20&c=d_94zs04XbfWaCPszisYD5uruE-MRYmRC8DmHsFu-js="
                alt="Team Member"
                className="img-fluid mb-3"
              />
              <h3>Jane Smith</h3>
              <p className="text-muted">Chief Marketing Officer</p>
            </div>
            <div className="col-md-4 team-member text-center">
              <img
                src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member"
                className="img-fluid mb-3"
              />
              <h3>Michael Brown</h3>
              <p className="text-muted">Head of Development</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions, feel free to reach out to us. We'd love
            to hear from you!
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@example.com">sukeshhegde994591@gmail.com</a>
          </p>
          <p>Phone: (123) 456-7890</p>
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
