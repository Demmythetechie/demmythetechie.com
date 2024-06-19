import { Schema, model } from "mongoose";

const projects =  new model('work', new Schema({
    imagePath: 'string',
    name: 'string',
    summary: 'string',
    githubLink: 'string',
    website: 'string'
}), 'works');

export default projects;