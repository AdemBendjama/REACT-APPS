export default class Todo {
  id: string;
  text: string;

  constructor(text: string) {
    this.id = Math.random().toString(32).slice(2);
    this.text = text;
  }
}
