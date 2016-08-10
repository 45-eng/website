activate :dotenv
activate :directory_indexes
activate :autoprefixer
activate :sprockets do |config|
  # config.imported_asset_path = File.expand_path("bower_components", root)
  # config.expose_middleman_helpers = true
end
sprockets.append_path File.join(root, "bower_components")

set :relative_links, true
set :css_dir, "assets/stylesheets"
set :js_dir, "assets/javascripts"
set :images_dir, "assets/images"
set :fonts_dir, "assets/fonts"
set :layout, "layouts/application"

# set :build_dir, "build"

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# sprockets.append_path File.join root, 'bower_components'

# puts '**************************************'
# puts File.expand_path("bower_components", root)
# puts root.inspect
#
# import_path File.expand_path("bower_components", root)

configure :development do
  activate :livereload
end

# configure :development do
#   activate :dotenv, env: '.env.development'
# end
#
# configure :build do
#   activate :dotenv, env: '.env.build'
# end

# Build-specific configuration
configure :build do
  activate :relative_assets

  # Minify on build
  activate :minify_css
  activate :minify_javascript

  set :js_compressor, Uglifier.new({
    comments: { comments: :none },
    mangle: { toplevel: true },
    compress: { unsafe: true}
  })

  # Compress images
  # activate :imageoptim

  # Enable cache buster
  activate :asset_hash

  activate :gzip
  activate :minify_html
end

activate :deploy do |deploy|
  deploy.deploy_method = :git

  # Optional Settings
  deploy.remote   = 'git@github.com:45-eng/45-eng.github.io.git' # remote name or git url, default: origin
  deploy.branch   = 'master' # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  # deploy.commit_message = 'custom-message'      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
end
