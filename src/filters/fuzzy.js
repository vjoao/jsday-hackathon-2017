import Fuse from 'fuse.js';

const options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 3,
    keys: [
        "subjects.name"
    ]
};

export default function (arr, input) {
    
    debugger;

    var fuse = new Fuse(arr, options);
    return fuse.search("bbb");
}