import { images } from "../constants";

const blogs = [
  {
    id: 1,
    image: images.blog1,
    category: "Rovers Center",
    date: "oct 16, 2023",
    admin: "Brian Neto",
    heading: "Awasi Rovers History",
    content:
      "We have a storied history which among other things involved, is founded on humble beginnings stretching back 10 years ago.",
    important:
      "We have a storied history which among other things involved, is founded on humble beginnings stretching back 10 years ago.",
    paragraph: [
      `
            We have a storied history which among other things involved, is founded on humble beginnings
stretching back 10 years ago. At inception, it constituted a random assembly of children being
coached by Dennis Bosingwa at the local primary school grounds (Ayucha Primary School)
after-school and weekends. From this, it morphed into a more organized team, made up of
children from the greater Awasi area attending training sessions or play recreationally. However,
during this period, the team was yet to be formally registered, organized and structures put in
place.
            `,
      `
    In 2015, the now trained team of junior players formally organized to play several junior
tournaments organized and hosted locally. Their success registered at these contests bolstered
their standing, attracting several local and international donors and sponsors. It is against this
backdrop of new supporters and sponsors, that the team was able to secure soccer equipment
uniforms and honour several invites and tournaments. However, the team played (with their
permission) under the name of the “sister project” MurayKeeper CBO up to 2023, when it
transitioned and formally registered as Awasi Rovers Academy.
    `,
      `
    2023 marks the coming of age and fruition of the Awasi Rovers dream. This was exemplified by
several milestones we achieved such as, successfully securing of a parcel of land at Onera in
Awasi courtesy of our donors, and being formally registered to begin the process of transitioning
into a formal academy. Currently, Rovers field is under development in preparation for being the
permanent home of Rovers Academy.
    `,
    ],
    subSection: {
      subHeading: "Soccer Equipment List",
      points: [
        "Shirts",
        "Shorts",
        "Pants",
        "Shoes",
        "Gloves",
        "Stumps",
        "Leg pads",
      ],
    },
    gallery: [
      { id: 1, image: images.blog1Gallery1 },
      { id: 2, image: images.blog1Gallery2 },
      { id: 3, image: images.blog1Gallery3 },
      //   { id: 4, image: images.blog1Gallery4 },
      //   { id: 5, image: images.blog1Gallery5 },
      //   { id: 6, image: images.blog1Gallery6 },
    ],
    tags: ["Team", "Practice", "Facilities"],
    comments: [
      {
        id: 1,
        image: images.blog1Comment1,
        name: "Dayle Hadlee",
        date: "june 1st, 2023",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ",
        replies: [
          {
            id: 1,
            image: images.blog1Comment2,
            name: "Hayley Jensen",
            date: "june 1st, 2023",
            content:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ",
          },
        ],
      },
      {
        id: 2,
        image: images.blog1Comment3,
        name: "Jeremy Coney",
        date: "june 1st, 2023",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ",
      },
    ],
  },
  {
    id: 2,
    image: images.blog2,
    category: "soccer club",
    date: "Oct 16, 2023",
    admin: "Brian Neto",
    heading: "Diversity",
    content:
      "At Awasi Rovers we endeavor to build an all-inclusive academy regardless of gender, social status and any other discriminatory metric.",
    important:
      "We welcome all children and community, offering talent development indiscriminately.",
    paragraph: [
      `
      At Awasi Rovers we endeavor to build an all-inclusive academy regardless of gender, social
status and any other discriminatory metric. We welcome all children and community, offering
talent development indiscriminately. We are alive to the fact that the society we live in has its
fair share of inequality. In light of this, we are champions of female empowerment through
actions. Our training sessions are inclusive of all genders ensuring that the girl-child is not left
behind considering we live in a highly patriarchal society where female sports lag behind.`,
    ],
    subSection: {
      subHeading: "Soccer Equipment List",
      points: [
        "Shirts",
        "Shorts",
        "Pants",
        "Shoes",
        "Gloves",
        "Stumps",
        "Leg pads",
      ],
    },
    gallery: [
      { id: 1, image: images.blog1Gallery4 },
      { id: 2, image: images.blog1Gallery5 },
      { id: 3, image: images.blog1Gallery6 },
    ],
    tags: ["Team", "Tournaments", "Sponsorship"],
    comments: [
      {
        id: 1,
        image: images.blog2Comment1,
        name: "Dayle Hadlee",
        date: "june 1st, 2023",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ",
        replies: [
          {
            id: 1,
            image: images.blog2Comment2,
            name: "Hayley Jensen",
            date: "june 1st, 2023",
            content:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ",
          },
        ],
      },
      {
        id: 2,
        image: images.blog2Comment3,
        name: "Jeremy Coney",
        date: "june 1st, 2023",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ",
      },
    ],
  },
  {
    id: 3,
    image: images.blog3,
    category: "Field",
    date: "Oct 16, 2023",
    admin: "Brian Neto",
    heading: "Rovers Field",
    content:
      "One of the challenges which hindered the transition into an academy was the lack of facilities and over-reliance on third party facilities such as schools.",
    important:
      "In 2022 we managed to secure donations from TSS Rovers and Vancouver Athletic from Canada to purchase 2 1/2 Acre parcel at Onera in Awasi.",
    paragraph: [
      `
      One of the challenges which hindered the transition into an academy was the lack of facilities
and over-reliance on third party facilities such as schools. Whilst we cherish and appreciate the
generosity of the schools which previously and continue to host our training sessions, they did
have their fair share of challenges, such as accessibility. Thus, it was imperative to secure a
football pitch. In so doing, it would be easier to have unfettered access to train and set up a world
class facility to realize our dream. We therefore reached out to several would-be donors to help
us achieve this dream.
      `,
      `
      In 2022 we managed to secure donations from TSS Rovers and Vancouver Athletic from Canada
to purchase 2 1/2 Acre parcel at Onera in Awasi. Rover’s field as it is fondly christened is
currently under development in preparation for use by both Awasi Rovers and the larger
Community for recreational purposes.
      `,
      `
      Currently, we have managed to plant grass, install rain harvesting tanks, storage shed and a
lavatory for use. We are in the process of fencing the property and boosting security.
      `,
      `
      Below is the concept diagram of what we envision Rovers field to look like and a pictorial of the
development phases.
      `,
    ],
    subSection: {
      subHeading: "Soccer Equipment List",
      points: [
        "Shirts",
        "Shorts",
        "Pants",
        "Shoes",
        "Gloves",
        "Stumps",
        "Leg pads",
      ],
    },
    gallery: [
      { id: 1, image: images.blog3Gallery1 },
      { id: 2, image: images.blog3Gallery2 },
      { id: 3, image: images.blog3Gallery3 },
      { id: 4, image: images.blog3Gallery4 },
      { id: 5, image: images.blog3Gallery5 },
      { id: 6, image: images.blog3Gallery6 },
    ],
    tags: ["Team", "Events", "Social"],
    comments: [
      {
        id: 1,
        image: images.blog3Comment1,
        name: "Dayle Hadlee",
        date: "june 1st, 2023",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ",
        replies: [
          {
            id: 1,
            image: images.blog3Comment2,
            name: "Hayley Jensen",
            date: "june 1st, 2023",
            content:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ",
          },
        ],
      },
      {
        id: 2,
        image: images.blog3Comment3,
        name: "Jeremy Coney",
        date: "june 1st, 2023",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ",
      },
    ],
  },
  {
    id: 4,
    image: images.home2,
    category: "Library",
    date: "Oct 16, 2023",
    admin: "Brian Neto",
    heading: "Rovers Library",
    content:
      "It boasts a collection of donated books covering a variety of academic and recreational topics and plans to expand the digital footprint for more e-books to be on course.",
    important:
      " A temporary iron-sheet structure, then, Functionality was evident by the number of children who used the resources at inception.",
    paragraph: [
      `
      Awasi Rovers has partnered with Muraykeeper foundation to offer academy players an avenue
and place to study both during school calendar days, weekends, and holidays. So far, the library is
fully stretched to capacity, and there are plans to expand it to accommodate more children. It
boasts a collection of donated books covering a variety of academic and recreational topics and
plans to expand the digital footprint for more e-books to be on course. In addition to this, we
currently have one librarian who works on a voluntary basis, deputized by the coach.
      `,
      `
      The community library was first set up in 2015. A temporary iron-sheet structure, then,
Functionality was evident by the number of children who used the resources at inception. Despite
the Covid pandemic, we were able to expand to the current permanent but leased property
courtesy of funding from donors. However, plans are in motion to secure a bigger space to
accommodate the ever-growing number of users. Also, there are future plans to digitize the
library to improve access to more books remotely.
      `,
      `
      Apart from serving as a venue for reading for the players, the library also offers the perfect
“classroom” for soccer lessons. The coaches often use the whiteboards or screen game film to
for tactical analysis. The venue also serves as a meeting venue for parents with the Academy
staff
      `,
    ],
    subSection: {
      subHeading: "Soccer Equipment List",
      points: [
        "Shirts",
        "Shorts",
        "Pants",
        "Shoes",
        "Gloves",
        "Stumps",
        "Leg pads",
      ],
    },
    gallery: [
      { id: 1, image: images.blog4Gallery1 },
      { id: 2, image: images.blog4Gallery2 },
      { id: 3, image: images.blog4Gallery3 },
      { id: 4, image: images.blog4Gallery4 },
      { id: 5, image: images.blog4Gallery5 },
    ],
    tags: ["Team", "Events", "Social"],
    comments: [
      {
        id: 1,
        image: images.blog3Comment1,
        name: "Dayle Hadlee",
        date: "june 1st, 2023",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ",
        replies: [
          {
            id: 1,
            image: images.blog3Comment2,
            name: "Hayley Jensen",
            date: "june 1st, 2023",
            content:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ",
          },
        ],
      },
      {
        id: 2,
        image: images.blog3Comment3,
        name: "Jeremy Coney",
        date: "june 1st, 2023",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente ullam esse laudantium corporis pariatur. ",
      },
    ],
  },
];

export default blogs;
