# Running locally

## Ruby

For best experience please use Ruby 2.5 or above. In order to avoid conflicts between different versions of gems found in various gem directories, set explicit location of gem directory by setting GEM_PATH and GEM_HOME in your environment like in this example:

```sh
GEM_PATH=$HOME/.gem
GEM_HOME=$HOME/.gem
```
Finally add $GEM_PATH/bin to your PATH in order to make preview.sh find jekyll executable.

## Setting up

Install matching versions of all Ruby gems for GitHub Pages. This will make sure that you can preview features such as HTTP Redirects. Make sure you have bundler installed.

```sh
$ gem install bundler #if bundler not installed
$ bundle install
```

```sh
$ git clone https://github.com/osv-io/osv-io.github.io.git osv-io
$ cd osv-io
```

## Starting the server:

Setup environment (consider adding to `~/.bashrc`):
```sh
$ export EXECJS_RUNTIME=RubyRacer
$ export LC_ALL="en_US.UTF-8"
```

Start jekyll:
```sh
$ ./preview.sh
```

The `preview.sh` script will run a `jekyll serve` with configuration set up for your local copy.  You can browse now to [localhost:4000](http://localhost:4000).
