import { storiesOne } from './stories-one.js';
import { storiesTwo } from './stories-two.js';

export const stories = [...storiesOne, ...storiesTwo];
export const findStory = id => stories.find(story => story.id === id);
