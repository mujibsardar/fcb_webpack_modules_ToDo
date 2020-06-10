import { todoCrtl } from './todoCtrl';

const main = ((todo) => {
	const init = () => {
     console.log("Hi from from init in index.js");
     todo.init();
  }
  return { init };
})(todoCrtl);

main.init();
