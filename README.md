# Running locally


## Setting up

```sh
$ sudo gem install jekyll
$ sudo gem install rouge
$ sudo gem install execjs
$ sudo gem install therubyracer
$ sudo gem install kramdown
```

```sh
$ git clone https://github.com/tgrabiec/osv-io.github.io.git osv-io
$ cd osv-io
```

Edit _config.yml, replace:

 `url: http://osv.io`

with:

 `url: http://localhost:4000`

## Starting the server:

Setup environment:
```sh
$ export EXECJS_RUNTIME=RubyRacer
$ export LC_ALL="en_US.UTF-8"
```

Start jekyll:
```sh
$ jekyll serve --baseurl ''
```

You can browse now to [localhost:4000](http://localhost:4000).
