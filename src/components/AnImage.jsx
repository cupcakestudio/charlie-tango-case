import Image from "next/image";

function Home() {
  return (
    <Image
      className="image_landing"
      src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      alt="Landscape picture"
      width={1600}
      height={900}
    />
  );
}

export default Home;
