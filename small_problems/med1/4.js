

/*
Input: string of commands
Output: result of the commands logged to console, if print command occurs

Problem:
- We have a stack, which works like an array with push and pop commands
- We have a register, which is a current integer value
- We receive and parse a series of commands
- The commands will push or pop elements from the stack, and
perform math operations between those values and the current register
value; the result of the op is saved to the register
- we can also update or print the current value of the register
- all values are integer values (in case of div and mod)

Data structure:
cpu = {
  stack: []
  register: 0
}

- each function takes cpu obj as argument
commands = {
  n: function(cpu, val){ place n in the register } // do this directly
  push: function(){ pushes register val in stack }
  add: function(){ pop value from stack, add to reg and store in reg }
  sub: function(){ pop value from stack, subtr from reg and store in reg }
  mult: function(){ pop value from stack, mult by reg and store in reg }
  div: function(){ pop value from stack, div into reg and store rounded int in reg }
  mod: function(){ pop value from stack, mod into reg and store in reg }
  pop: function(){ pop value from stack, and assign to reg }
  print: function(){ log current value of reg }
}

Algorithm:
- initialize a cpu and commands obj
- split commands on space
- iterate through commands array grabbing each command
  - if typeof command === number
    cpu[register] = command
  - else invoke function commands[command](cpu)
*/

function newCPU() {
  return { 'stack': [],
           'register': 0,
          };
}

function push(cpu) {
  cpu['stack'].push(cpu['register']);
}

function add(cpu) {
  cpu['register'] += cpu['stack'].pop();
}

function sub(cpu) {
  cpu['register'] -= cpu['stack'].pop();
}

function mult(cpu) {
  cpu['register'] *= cpu['stack'].pop();
}

function div(cpu) {
  cpu['register'] = Math.floor(cpu['register'] / cpu['stack'].pop());
}

function mod(cpu) {
  cpu['register'] %= cpu['stack'].pop();
}

function pop(cpu) {
    if (cpu['stack'].length === 0) {
      throw new Error("Empty Stack!");
    }
    cpu['register'] = cpu['stack'].pop();
}

function print(cpu) {
  console.log(cpu['register']);
}

const commands = {
  PUSH: push,
  ADD: add,
  SUB: sub,
  MULT: mult,
  DIV: div,
  MOD: mod,
  POP: pop,
  PRINT: print,
}

function minilang(commandStr) {
  let cpu = newCPU();
  let command;
  let tokens = commandStr.split(' ')

  for (let i = 0; i < tokens.length; i += 1) {
    command = tokens[i];
    if (parseInt(command, 10)) {
      cpu['register'] = parseInt(command, 10);
    } else {
      try {
        commands[command](cpu);
      } catch (error) {
        return error.message;
      }
    }
  }

  return undefined;
}


// minilang('PRINT');
// 0

// minilang('5 PUSH 3 MULT PRINT');
// 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

// minilang('5 PUSH POP PRINT');
// 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

console.log(minilang('3 POOP POP PUSH 7 DIV MULT PRINT'));
// 6

// minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

// minilang('-3 PUSH 5 SUB PRINT');
// 8

// minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)