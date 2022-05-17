var PurpleMine = PurpleMine || {} // eslint-disable-line no-use-before-define

PurpleMine.IssueList = (function () {
  'use strict'

  var instance
  function IssueList () {
    if (instance) {
      return instance
    }

    instance = this
    CheckIssueList()
  };

  function CheckIssueList () {
    if ($('table.list.issues').length > 0) {
      if ($('th.parent > a.sort').length > 0) {
        $('table.list.issues').addClass('colorize')
      }
    }
  }

  return IssueList
}())
