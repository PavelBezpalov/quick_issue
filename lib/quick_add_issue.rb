module QuickAddIssue
  class Hooks < Redmine::Hook::ViewListener
    render_on :view_layouts_base_html_head, :partial => "quick_add_issue/javascript"
  end
end
