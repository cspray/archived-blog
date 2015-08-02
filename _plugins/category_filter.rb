module Cspray
  module CategoryNameFilter
    def category_name(input)
      input.first
    end
  end

  module CategoryCountFilter
    def category_count(input)
      input.last.count.to_s
    end
  end

  class CategoryPostListTag < Liquid::Tag

    def render(context)
      category = context[@markup].to_s
      categories = context.registers[:site].categories[category]
      o = '<ul class="no-list-icon">'
      categories.each do |post|
        timeago = Jekyll::Timeago::Filter.timeago(post.date)
        o << '<li><a href="' + post.url + '">' + post.title + '</a> <p class="text-muted">Posted ' + timeago + '</p></li>'
      end
      o << '</ul>'
      o
    end
  end
end

Liquid::Template.register_filter(Cspray::CategoryNameFilter)
Liquid::Template.register_filter(Cspray::CategoryCountFilter)
Liquid::Template.register_tag('category_post_list', Cspray::CategoryPostListTag)
