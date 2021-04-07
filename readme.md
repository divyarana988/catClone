### CatClone_command

#### Implementation of cat command

It is clone of cat command available in bash but not in window cmd.
It is used to display or make a copy content of one or more files in terminal.


###### General syntax

1) catCloneCommand [options] [files]
2) option to remove big line break (-s)
3) option to add line number to non-empty line (-b)
4) option to add line numbers to all lines (-n)

###### Commands

1) node catCloneCommand.js filepath   -> displays content of file in terminal.
2) node catCloneCommand.js filepath1 filepath2 filepath3   -> displays content of all files in terminal in given order.
3) node catCloneCommand.js -s filepath   -> convert big line breaks into single line break.
4) node catCloneCommand.js -n filepath      -> give numbering to all the files.
5) node catCloneCommand.js -b filepath      -> give numbering to non-empty lines.


we can mix and match the options.


######  Edge cases covered

1) if file entered is not found, then it gives file does not exist error.
2) -n and -b are 2 options which are mutually exclusive, so if user types both of them together only the first enter option should work.