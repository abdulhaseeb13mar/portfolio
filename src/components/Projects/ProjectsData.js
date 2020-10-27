// Technologies Icons imports
import TechnologiesIcons from "../../assets/Technologies-Icons";

// Project photos imports
import FamilyWinsPhotos from "../../assets/FamilyWins";
import SlackClonePhotos from "../../assets/SlackClone";
import ToDoAppPhotos from "../../assets/TodoApp";
import TictactoePhotos from "../../assets/TicTacToe";

export default [
  {
    name: "Family Wins Web App",
    cardPhoto: FamilyWinsPhotos.card,
    description:
      "A Web application for christians to get closer to christianity by reading bible article and connect with fellow companions",
    technologies: {
      react: TechnologiesIcons.react,
      js: TechnologiesIcons.js,
    },
    github: false,
    demo: "http://the-familywins.web.app/",
    photos: FamilyWinsPhotos.dialog,
  },
  {
    name: "Slack Clone Web App",
    cardPhoto: SlackClonePhotos.card,
    description:
      "A clone of slack built on ReactJS that offers direct messages as well as channel messages. including media messages with firebase at back",
    technologies: {
      react: TechnologiesIcons.react,
      js: TechnologiesIcons.js,
      firebase: TechnologiesIcons.firebase,
    },
    github: "https://github.com/abdulhaseeb13mar/clone-slack-react",
    demo: "https://clone-slack-react-f2b16.firebaseapp.com",
    photos: SlackClonePhotos.dialog,
  },
  {
    name: "Interactive To-Do App",
    cardPhoto: ToDoAppPhotos.card,
    description: "A To do app with a trello like drag n drop feature for the tasks",
    technologies: {
      html: TechnologiesIcons.html,
      css: TechnologiesIcons.css,
      js: TechnologiesIcons.js,
    },
    github: "https://github.com/abdulhaseeb13mar/todolist",
    demo: "https://abdulhaseeb13mar.github.io/todolist/",
    photos: ToDoAppPhotos.dialog,
  },
  {
    name: "Tic Tac Toe Game",
    cardPhoto: TictactoePhotos.card,
    description: "A Simple Tic tac toe game using vanilla Javascript for the logic behind. with eye catching UI",
    technologies: {
      html: TechnologiesIcons.html,
      css: TechnologiesIcons.css,
      js: TechnologiesIcons.js,
    },
    github: "https://github.com/abdulhaseeb13mar/tictactoe",
    demo: "https://abdulhaseeb13mar.github.io/tictactoe/",
    photos: TictactoePhotos.dialog,
  },
];
