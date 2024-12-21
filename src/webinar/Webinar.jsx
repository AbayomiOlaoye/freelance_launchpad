const Webinar = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <article className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl font-extrabold">Webinar</h2>
        <p className="text-lg">Join our webinar to learn about the Freelance Launchpad program.</p>
        <button className="border-2 border-primary rounded-lg px-4 py-2 text-primary transition-all active:scale-95 hover:bg-primary hover:text-orange-100">
          Register Now
        </button>
      </article>
    </section>
  );
}

export default Webinar;