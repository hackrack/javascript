## CLI - Terminal / Command Prompt

A Command Line Interface (CLI) is a text-based way we can interact with our computer.
Being able to effectively use the command line will be an essential skill. Both the
Terminal and Command Prompt are CLIs. Macs use the "Terminal" and PCs use the "Command
Prompt". Open up your CLI as you would any application on your computer.

```
#terminal
~ $
```

```
#command prompt
C:\>
```

Everything before the `$` for Macs is the current directory (folder), and the `>`
for PCs. CLIs will typically start at the root directory. After the prompt symbol,
you can type in commands.

Commands typically operate in the current directory. For example, the `ls` command
for Macs or `dir` command for Windows will list all the files in the current directory.
The output of this command will be different depending on which directory you are in.
Learning how to navigate between directories is a vital for using your CLI effectively.

#### MAC Commands
* `ls` - lists all the files in the current directory
* `pwd` - returns the present working directory
* `cd [path]` - changes the current directory to the directory specified by the `path` argument

#### PC Commands
* `dir` - lists all the files in the current directory
* `cd` - returns the present working directory
* `cd [path]` - changes the current directory to the directory specified by the `path` argument

### Navigating Directories

To navigate through directories in the command line, we need to specify which directories
to go through. Let's say we are in the root directory and want to navigate into a directory
we have on our Desktop (`bootcamp_prep`). We need to first go into the `Desktop`
directory, and then go into `bootcamp_prep`.

```
~ $ ls
Applications			Desktop				
Documents			    Downloads			
Library			 	    Movies				
Music				      Pictures
~ $ cd Desktop
~ Desktop $ ls
bootcamp_prep
~ Desktop $ cd bootcamp_prep
~ bootcamp_prep $
```

Notice, after we navigate to a new folder using `cd`, the current path changed to
reflect that. Test this out on your CLI, practice going into different folders.

### Directory Shortcuts

Use the command `cd ..` to go back to the previous directory. If we are in the
`bootcamp_prep` directory on our `Desktop`, and want to go back to the `Desktop`:

```
~ bootcamp_prep $ cd ..
~ Desktop $
```

Use the command `cd` (by itself) to back to the root directory:

```
~ bootcamp_prep $ cd
~ $
```
