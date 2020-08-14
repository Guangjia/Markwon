(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{254:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML "),s("Badge",{attrs:{text:"2.0.0"}})],1),t._v(" "),s("LegacyWarning"),t._v(" "),s("p",[t._v("Starting with version "),s("code",[t._v("2.0.0")]),t._v(" "),s("code",[t._v("Markwon")]),t._v(" brings the whole HTML parsing/rendering\nstack "),s("em",[t._v("on-site")]),t._v(". The main reason for this are "),s("em",[t._v("special")]),t._v(" definitions of HTML nodes\nby "),s("Link",{attrs:{name:"commonmark-spec"}}),t._v(". More specifically: "),s("Link",{attrs:{name:"commonmark-spec#inline",displayName:"inline"}}),t._v("\nand "),s("Link",{attrs:{name:"commonmark-spec#block",displayName:"block"}}),t._v(".\nThese two are "),s("em",[t._v("a bit")]),t._v(" different from "),s("em",[t._v("native")]),t._v(" HTML understanding.\nWell, they are "),s("em",[t._v("completely")]),t._v(" different and share only the same names as\n"),s("Link",{attrs:{name:"html-inlines",displayName:"HTML-inline"}}),t._v(" and "),s("Link",{attrs:{name:"html-blocks",displayName:"HTML-block"}}),t._v("\nelements. This leads to situations when for example an "),s("code",[t._v("<i>")]),t._v(" tag is considered\na block when it's used like this:")],1),t._v(" "),t._m(0),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("A bit of background")]),t._v(" "),s("br"),t._v(" "),s("GithubIssue",{attrs:{id:"52",displayName:"This issue"}}),t._v(" had brought attention to differences between HTML & commonmark implementations. "),s("br"),s("br")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),s("p",[t._v("We have just added a "),s("code",[t._v("new-line")]),t._v(" before closing "),s("code",[t._v("</i>")]),t._v(" tag. And this\nchanges everything as now, according to the "),s("Link",{attrs:{name:"commonmark-dingus"}}),t._v(",\nwe have 2 HtmlBlocks: one before "),s("code",[t._v("new-line")]),t._v(" (containing open "),s("code",[t._v("<i>")]),t._v(" tag and text content)\nand one after (containing as little as closing "),s("code",[t._v("</i>")]),t._v(" tag).")],1),t._v(" "),t._m(3),t._v(" "),t._m(4),s("p",[t._v("We will have 1 HtmlBlock (from previous snippet) and a bunch of HtmlInlines:")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("We will get:")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("Which will be rendered in a final document:")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("We, on the other hand, do not posess HTML heritage ("),s("em",[t._v("thank 🤖!")]),t._v("), but still\nwant to display some HTML to style resulting markdown a bit. That's why "),s("code",[t._v("Markwon")]),t._v("\nincorporated own HTML parsing logic. It is based on the "),s("Link",{attrs:{name:"jsoup"}}),t._v(" project.\nAnd makes usage of the "),s("code",[t._v("Tokekiser")]),t._v(" class that allows to "),s("em",[t._v("tokenise")]),t._v(" input HTML.\nAll other code that doesn't follow this purpose was removed. It's safe to use\nin projects that already have "),s("code",[t._v("jsoup")]),t._v(" dependency as "),s("code",[t._v("Markwon")]),t._v(" repackaged "),s("strong",[t._v("jsoup")]),t._v(" source classes\n(which could be found "),s("Link",{attrs:{name:"markwon-jsoup",displayName:"here"}}),t._v(")")],1),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("Consider this:")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),s("p",[s("code",[t._v("MarkwonHtmlParserImpl")]),t._v(" does not create a unified HTML node. Instead it creates\n2 collections: inline tags and block tags. Inline tags are represented as a "),s("code",[t._v("List")]),t._v("\nof inline tags ("),s("Link",{attrs:{name:"html-inlines",displayName:"reference"}}),t._v("). And\nblock tags are structured in a tree. This helps to achieve "),s("em",[t._v("browser")]),t._v("-like behaviour,\nwhen open inline tag is applied to all content (even if inside blocks) until closing tag.\nAll tags that are not "),s("em",[t._v("inline")]),t._v(" are considered to be "),s("em",[t._v("block")]),t._v(" ones.")],1),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),s("p",[t._v("Default implementation can be obtain like this:")]),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),t._m(38),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._m(42),t._v(" "),t._m(43),t._m(44),t._v(" "),t._m(45),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._m(51),t._v(" "),t._m(52),t._v(" "),s("MavenBadge",{attrs:{artifact:"markwon"}}),t._v(" "),t._m(53),t._m(54),t._v(" "),t._m(55)],1)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\nHello from italics tag\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Let's modify code snippet above "),a("em",[this._v("a bit")]),this._v(":")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-markdown extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\nHello from italics tag\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("If we modify code snippet "),a("em",[this._v("a bit")]),this._v(" again:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-markdown extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\nHello from italics tag\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("b")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("bold>"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("b")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("HtmlInline ("),s("code",[t._v("<i>")]),t._v(")")]),t._v(" "),s("li",[t._v("HtmlInline ("),s("code",[t._v("<b>")]),t._v(")")]),t._v(" "),s("li",[t._v("Text ("),s("code",[t._v("bold")]),t._v(")")]),t._v(" "),s("li",[t._v("HtmlInline ("),s("code",[t._v("</b>")]),t._v(")")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("Those "),s("em",[t._v("little")]),t._v(" differences render "),s("code",[t._v("Html.fromHtml")]),t._v(" (which was used in "),s("code",[t._v("1.x.x")]),t._v(" versions)\nuseless. And actually it renders most of the HTML parsers implementations useless,\nas most of them do not allow processing of HTML fragments in a raw fashion\nwithout "),s("em",[t._v("fixing")]),t._v(" content on-the-fly.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("Both "),s("code",[t._v("TagSoup")]),t._v(" and "),s("code",[t._v("Jsoup")]),t._v(" HTML parsers (that were considered for this project) are built to deal with\n"),s("em",[t._v("malicious")]),t._v(" HTML code ("),s("em",[t._v("all HTML code")]),t._v("? 😶). So, when supplied\nwith a "),s("code",[t._v("<i>italic")]),t._v(" fragment they will make it "),s("code",[t._v("<i>italic</i>")]),t._v(".\nAnd it's a good thing, but consider these fragments for the sake of markdown:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("code",[this._v("<i>italic")])]),this._v(" "),a("li",[a("code",[this._v("<b>bold italic")])]),this._v(" "),a("li",[a("code",[this._v("</b><i>")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("code",[this._v("<i>italic </i>")])]),this._v(" "),a("li",[a("code",[this._v("<b>bold italic</b>")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("em",[a("sup",[this._v("*")]),this._v(" Or to be precise: "),a("code",[this._v("<html><head></head><body><i>italic </i></body></html>")]),this._v(" &\n"),a("code",[this._v("<html><head></head><body><b>bold italic</b></body></html>")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("expected")]),t._v(" "),s("th",[t._v("actual")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("i",[t._v("italic "),s("b",[t._v("bold italic")])])]),t._v(" "),s("td",[s("i",[t._v("italic ")]),s("b",[t._v("bold italic")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("This might seem like a minor problem, but add more tags to a document,\nintroduce some deeply nested structures, spice openning and closing tags up\nby adding markdown markup between them and finally write "),a("em",[this._v("malicious")]),this._v(" HTML code 😆!")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("There is no such problem on the "),a("em",[this._v("frontend")]),this._v(" for which commonmark specification is mostly\naimed as "),a("em",[this._v("frontend")]),this._v(" runs in a web-browser environment. After all "),a("em",[this._v("parsed")]),this._v(" markdown\nwill become HTML tags (most common usage). And web-browser will know how to render final result.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"parser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parser","aria-hidden":"true"}},[this._v("#")]),this._v(" Parser")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("There are no additional steps to configure HTML parsing. It's enabled by default.\nIf you wish to "),a("em",[this._v("exclude")]),this._v(" it, please follow the "),a("a",{attrs:{href:"#exclude-html-parsing"}},[this._v("exclude")]),this._v(" section below.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The key class here is: "),a("code",[this._v("MarkwonHtmlParser")]),this._v(" that is defined in "),a("code",[this._v("markwon-html-parser-api")]),this._v(" module.\n"),a("code",[this._v("markwon-html-parser-api")]),this._v(" is a simple module that defines HTML parsing contract and\ndoes not provide implementation.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("To change what implementation "),a("code",[this._v("Markwon")]),this._v(" should use, "),a("code",[this._v("SpannableConfiguration")]),this._v(" can be used:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("SpannableConfiguration"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("htmlParser")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MarkwonHtmlParser"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("markwon-html-parser-impl")]),this._v(" on the other hand provides "),a("code",[this._v("MarkwonHtmlParser")]),this._v(" implementation.\nIt's called "),a("code",[this._v("MarkwonHtmlParserImpl")]),this._v(". It can be created like this:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" MarkwonHtmlParser htmlParser "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" MarkwonHtmlParserImpl"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" MarkwonHtmlParser htmlParser "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" MarkwonHtmlParserImpl"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HtmlEmptyTagReplacement"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"empty-tag-replacement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#empty-tag-replacement","aria-hidden":"true"}},[this._v("#")]),this._v(" Empty tag replacement")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("In order to append text content for self-closing, void or just "),a("em",[this._v("empty")]),this._v(" HTML tags,\n"),a("code",[this._v("HtmlEmptyTagReplacement")]),this._v(" can be used. As we cannot set Span for empty content,\nwe must represent empty tag with text during parsing stage (if we want it to be represented).")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("code",[this._v('<img src="me-sad.JPG">')])]),this._v(" "),a("li",[a("code",[this._v("<br />")])]),this._v(" "),a("li",[a("code",[this._v("<who-am-i></who-am-i>")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("By default ("),s("code",[t._v("HtmlEmptyTagReplacement.create()")]),t._v(") will handle "),s("code",[t._v("img")]),t._v(" and "),s("code",[t._v("br")]),t._v(" tags.\n"),s("code",[t._v("img")]),t._v(" will be replaced with "),s("code",[t._v("alt")]),t._v(" property if it is present and "),s("code",[t._v("\\uFFFC")]),t._v(" if it is not.\nAnd "),s("code",[t._v("br")]),t._v(" will insert a new line.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"non-closed-tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#non-closed-tags","aria-hidden":"true"}},[this._v("#")]),this._v(" Non-closed tags")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("It's possible that your HTML can contain non-closed tags. By default "),a("code",[this._v("Markwon")]),this._v(" will ignore them,\nbut if you wish to get a bit closer to a web-browser experience, you can allow this behaviour:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("SpannableConfiguration"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("htmlAllowNonClosedTags")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("If there is (for example) an "),s("code",[t._v("<i>")]),t._v(" tag at the start of a document and it's not closed\nand "),s("code",[t._v("Markwon")]),t._v(" is configured to "),s("strong",[t._v("not")]),t._v(" ignore non-closed tags ("),s("code",[t._v(".htmlAllowNonClosedTags(true)")]),t._v("),\nit will make the whole document in italics")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"implementation-note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-note","aria-hidden":"true"}},[this._v("#")]),this._v(" Implementation note")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"renderer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renderer","aria-hidden":"true"}},[this._v("#")]),this._v(" Renderer")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Unlike "),a("code",[this._v("MarkwonHtmlParser")]),this._v(" "),a("code",[this._v("Markwon")]),this._v(" comes with a "),a("code",[this._v("MarkwonHtmlRenderer")]),this._v(" by default.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[this._v("MarkwonHtmlRenderer"),a("span",{attrs:{class:"token punctuation"}},[this._v(".")]),a("span",{attrs:{class:"token function"}},[this._v("create")]),a("span",{attrs:{class:"token punctuation"}},[this._v("(")]),a("span",{attrs:{class:"token punctuation"}},[this._v(")")]),a("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Default instance have these tags "),a("em",[this._v("handled")]),this._v(":")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("emphasis\n"),s("ul",[s("li",[s("code",[t._v("i")])]),t._v(" "),s("li",[s("code",[t._v("em")])]),t._v(" "),s("li",[s("code",[t._v("cite")])]),t._v(" "),s("li",[s("code",[t._v("dfn")])])])]),t._v(" "),s("li",[t._v("strong emphasis\n"),s("ul",[s("li",[s("code",[t._v("b")])]),t._v(" "),s("li",[s("code",[t._v("strong")])])])]),t._v(" "),s("li",[s("code",[t._v("sup")]),t._v(" (super script)")]),t._v(" "),s("li",[s("code",[t._v("sub")]),t._v(" (sub script)")]),t._v(" "),s("li",[t._v("underline\n"),s("ul",[s("li",[s("code",[t._v("u")])]),t._v(" "),s("li",[s("code",[t._v("ins")])])])]),t._v(" "),s("li",[t._v("strike through\n"),s("ul",[s("li",[s("code",[t._v("del")])]),t._v(" "),s("li",[s("code",[t._v("s")])]),t._v(" "),s("li",[s("code",[t._v("strike")])])])]),t._v(" "),s("li",[s("code",[t._v("a")]),t._v(" (link)")]),t._v(" "),s("li",[s("code",[t._v("ul")]),t._v(" (unordered list)")]),t._v(" "),s("li",[s("code",[t._v("ol")]),t._v(" (ordered list)")]),t._v(" "),s("li",[s("code",[t._v("img")]),t._v(" (image)")]),t._v(" "),s("li",[s("code",[t._v("blockquote")]),t._v(" (block quote)")]),t._v(" "),s("li",[s("code",[t._v("h{1-6}")]),t._v(" (heading)")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("If you wish to "),a("em",[this._v("extend")]),this._v(" default handling (or override existing),\n"),a("code",[this._v("#builderWithDefaults")]),this._v(" factory method can be used:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[this._v("MarkwonHtmlRenderer"),a("span",{attrs:{class:"token punctuation"}},[this._v(".")]),a("span",{attrs:{class:"token function"}},[this._v("builderWithDefaults")]),a("span",{attrs:{class:"token punctuation"}},[this._v("(")]),a("span",{attrs:{class:"token punctuation"}},[this._v(")")]),a("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("For a completely "),a("em",[this._v("clean")]),this._v(" configurable instance "),a("code",[this._v("#builder")]),this._v(" method can be used:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[this._v("MarkwonHtmlRenderer"),a("span",{attrs:{class:"token punctuation"}},[this._v(".")]),a("span",{attrs:{class:"token function"}},[this._v("builder")]),a("span",{attrs:{class:"token punctuation"}},[this._v("(")]),a("span",{attrs:{class:"token punctuation"}},[this._v(")")]),a("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"custom-tag-handler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-tag-handler","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom tag handler")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("To configure "),a("code",[this._v("MarkwonHtmlRenderer")]),this._v(" to handle tags differently or\ncreate a new tag handler - "),a("code",[this._v("TagHandler")]),this._v(" can be used")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("TagHandler")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("handle")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" SpannableConfiguration configuration"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" SpannableBuilder builder"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" HtmlTag tag\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("For the most simple "),a("em",[this._v("inline")]),this._v(" tag handler a "),a("code",[this._v("SimpleTagHandler")]),this._v(" can be used:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("SimpleTagHandler")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("TagHandler")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Nullable")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" Object "),s("span",{attrs:{class:"token function"}},[t._v("getSpans")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" SpannableConfiguration configuration"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" HtmlTag tag"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("For example, "),a("code",[this._v("EmphasisHandler")]),this._v(":")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("EmphasisHandler")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("SimpleTagHandler")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Nullable")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Object "),s("span",{attrs:{class:"token function"}},[t._v("getSpans")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" SpannableConfiguration configuration"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" HtmlTag tag"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" configuration"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("factory")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("emphasis")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("If you wish to handle a "),a("em",[this._v("block")]),this._v(" HTML node (for example "),a("code",[this._v("<ul><li>First<li>Second</ul>")]),this._v(") refer\nto "),a("code",[this._v("ListHandler")]),this._v(" source code for reference.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("The most important thing when implementing custom "),s("code",[t._v("TagHandler")]),t._v(" is to know\nwhat type of "),s("code",[t._v("HtmlTag")]),t._v(" we are dealing with. There are 2: inline & block.\nInline tag cannot contain children. Block "),s("em",[t._v("can")]),t._v(" contain children. And they\n"),s("em",[t._v("most likely")]),t._v(" should also be visited and "),s("em",[t._v("handled")]),t._v(" by registered "),s("code",[t._v("TagHandler")]),t._v(" (if any)\naccordingly. See "),s("code",[t._v("TagHandler#visitChildren(configuration, builder, child);")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"css-inline-style-parser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-inline-style-parser","aria-hidden":"true"}},[this._v("#")]),this._v(" Css inline style parser")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("When implementing own "),a("code",[this._v("TagHandler")]),this._v(" you might want to inspect inline CSS styles\nof a HTML element. "),a("code",[this._v("Markwon")]),this._v(" provides an utility parser for that purpose:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" CssInlineStyleParser inlineStyleParser "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" CssInlineStyleParser"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CssProperty property"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" inlineStyleParser"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("parse")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"width: 100%; height: 100%;"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// [0] = CssProperty({width=100%}),")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// [1] = CssProperty({height=100%})")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"exclude-html-parsing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exclude-html-parsing","aria-hidden":"true"}},[this._v("#")]),this._v(" Exclude HTML parsing")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("If you wish to exclude HTML parsing altogether, you can manually\nexclude "),s("code",[t._v("markwon-html-parser-impl")]),t._v(" artifact from your projects compile classpath.\nThis can be beneficial if you know that markdown input won't contain\nHTML and/or you wish to ignore it. Excluding HTML parsing\ncan speed up "),s("code",[t._v("Markwon")]),t._v(" parsing and will decrease final size of\n"),s("code",[t._v("Markwon")]),t._v(" dependency by around "),s("code",[t._v("100kb")]),t._v(".")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("dependencies "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("implementation")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string gstring"}},[t._v('"ru.noties:markwon:'),s("span",{attrs:{class:"token expression"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("markwonVersion"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        exclude module"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'markwon-html-parser-impl'")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Excluding "),a("code",[this._v("markwon-html-parser-impl")]),this._v(" this way will result in\n"),a("code",[this._v("MarkwonHtmlParser#noOp")]),this._v(" implementation. No further steps are\nrequired.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Excluding "),s("code",[t._v("markwon-html-parser-impl")]),t._v(" won't remove "),s("em",[t._v("all")]),t._v(" the content between\nHTML tags. It will if "),s("code",[t._v("commonmark")]),t._v(" decides that a specific fragment is a\n"),s("code",[t._v("HtmlBlock")]),t._v(", but it won't if fragment is considered a "),s("code",[t._v("HtmlInline")]),t._v(" as "),s("code",[t._v("HtmlInline")]),t._v("\ndoes not contain content (just a tag definition).")])])}],!1,null,null,null);e.options.__file="html.md";a.default=e.exports}}]);