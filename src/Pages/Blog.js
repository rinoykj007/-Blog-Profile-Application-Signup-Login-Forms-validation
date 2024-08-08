import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt:
      "Learn the basics of React and start building your first application.",
    date: "August 1, 2024",
  },
  {
    id: 2,
    title: "Advanced React Hooks",
    excerpt:
      "Dive deep into React Hooks and learn how to use them effectively.",
    date: "August 5, 2024",
  },
  {
    id: 3,
    title: "Styling in React with Tailwind",
    excerpt:
      "Discover how to use Tailwind CSS with React for responsive designs.",
    date: "August 10, 2024",
  },
];

const BlogPage = () => {
  const pageStyle = {
    background: "linear-gradient(to right, #FDFBFB, #EBEDEE 70%)",
    minHeight: "100vh",
    paddingBottom: "4rem",
  };

  const cardStyle = {
    backgroundColor: "#f9f9f9",
  };

  const textStyle = {
    background: "linear-gradient(to right, #30CFD0 0%, #330867 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "5rem",
    fontFamily: "Arial, sans-serif",
    textTransform: "uppercase",
  };

  return (
    <div style={pageStyle}>
      <header className="text-center py-12 mb-8">
        <h1 style={textStyle} className="font-bold">
          My Tech Blog
        </h1>
      </header>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-lg shadow-md overflow-hidden"
              style={cardStyle}
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 text-white text-center py-4 mt-12">
        <p>Using Bootstrap | 2024 My Tech Blog</p>
      </footer>
    </div>
  );
};

export default BlogPage;
