export const projects = [
  {
    slug: "building-surveys",
    title: "Building Surveys",
    image: "/images/img.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto esse nemo ipsa distinctio tenetur quod aperiam quia natus saepe cupiditate non assumenda incidunt maxime veritatis earum dignissimos, temporibus a?",
    fullDescription: "Full description of the Building Surveys project...",
  },
  // Add more projects here...
];

export const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug);
};
