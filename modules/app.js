import {username, password, code, cook} from './user.js'
import { accountnumber } from './account.js';
import { withdraw } from './user.js';
// Rename
import { withdraw as account } from './account.js';
// Importing default function
import {default as def} from './account.js'

console.log(username, password,);
code();
cook();
withdraw();
account();
console.log(accountnumber);

// calling default function
def();