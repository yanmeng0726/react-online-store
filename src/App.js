
import Directory from "./components/directory/directory.component";
const App = () => {

  const categories = [{
    id:1,
    title:'Springs',
    imageUrl: "https://i.ibb.co/4YqNv57/pexels-ben-mack-6775389.jpg"
  },
  {
    id:2,
    title:'Summer',
    imageUrl:"https://i.ibb.co/mbYrpzD/pexels-jesse-zheng-732548.jpg"
  },
  {
    id:3,
    title:'Fall',
    imageUrl:"https://i.ibb.co/xGSPwhc/pexels-digital-buggu-319382.jpg" 
  },
  {
    id:4,
    title:'Winter',
    imageUrl:"https://i.ibb.co/ChP5HPq/pexels-irina-iriser-1122639.jpg"
  },
  {
    id:5,
    title:'All Season',
    imageUrl:"https://i.ibb.co/GCsncnR/harli-marten-n7a2-OJDSZns-unsplash.jpg"
  }
]
return (
  <Directory categories = {categories} />
);
};

export default App;
