module Cspray
  class SubtitleGenerator < Jekyll::Generator
    def generate(site)
      (site.posts + site.pages).each do |post|
        st = post.data['subtitle'] || post.data['category']
        if st
          post.data['subtitle'] = st
        end
      end
    end
  end
end
