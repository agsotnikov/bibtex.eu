"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[725],{9574:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto","metadata":{"permalink":"/de/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto","editUrl":"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-28-quarto.md","source":"@site/blog/2022-08-28-quarto.md","title":"How to Format Citations and Bibliographies in RStudio with CiteDrive and Quarto","description":"Do you need to format citations and a bibliography for a research paper in RStudio? Are you struggling to keep track of all your references and formatting requirements? Have no fear! CiteDrive and Quarto can help. This blog post will show you how to use both tools to create beautiful, correctly formatted citations and bibliographies.","date":"2022-08-28T00:00:00.000Z","formattedDate":"28. August 2022","tags":[{"label":"citedrive","permalink":"/de/blog/tags/citedrive"},{"label":"rstudio","permalink":"/de/blog/tags/rstudio"},{"label":"quarto","permalink":"/de/blog/tags/quarto"},{"label":"rmarkdown","permalink":"/de/blog/tags/rmarkdown"}],"readingTime":2.315,"hasTruncateMarker":false,"authors":[{"name":"CiteDrive","title":"https://www.citedrive.com/","mail":"hello@citedrive.com","url":"https://www.citedrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],"frontMatter":{"slug":"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto","title":"How to Format Citations and Bibliographies in RStudio with CiteDrive and Quarto","authors":{"name":"CiteDrive","title":"https://www.citedrive.com/","mail":"hello@citedrive.com","url":"https://www.citedrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},"tags":["citedrive","rstudio","quarto","rmarkdown"]},"nextItem":{"title":"Wie man einen DOI in einem BibTeX-Eintrag mithilfe von CiteDrive umwandelt","permalink":"/de/blog/how-to-convert-a-doi-to-a-bibtex-citation-using-citedrive"}},"content":"Do you need to format citations and a bibliography for a research paper in RStudio? Are you struggling to keep track of all your references and formatting requirements? Have no fear! CiteDrive and Quarto can help. This blog post will show you how to use both tools to create beautiful, correctly formatted citations and bibliographies.\\n\\n\\n## Get started\\n\\nTo format citations and bibliographies in RStudio with CiteDrive and Quarto, follow these steps:\\n\\n\\n### Step 1: Include references in your project\\n\\nFirst, you must create a CiteDrive account by going to their website and selecting the \'Sign Up\' button. Completing your account will then enable you to make an \'R-Markdown\' (*it works for Quarto, don\'t you worry*) project; simply name it and ![fill the project with references](https://citedrive.medium.com/adding-bibliographic-references-to-rstudio-using-citedrive-create-citations-in-r-markdown-or-9b1e1ab59cf6). Yours might look something like this:\\n\\n![CiteDrive - Example](@site/static/img/tutorial/citedrive_project_example.png)\\n\\n### Step 2:  Connect your Quarto document to CiteDrive\\n\\nNow, let\'s connect your new CiteDrive to your Quarto document. To do this, click the \'bib\' button. This will open up a new tab with all your entries in BibTeX format. Copy the URL from the new tab and paste it into the YAML part of your QMD file.\\n\\n````md\\n---\\nbibliography: \\"api.citedrive.com/URL_BIB\\"\\n---\\n````\\n\\n### Step 3: Copy the citation keys.\\n\\nOnce your references are imported, you can insert them into your Quarto document. To do this, return to your CiteDrive project and one or more references your want to insert into your document and click the cite button. CiteDrive will copy the citation key to your clipboard.\\n\\n![CiteDrive - Example](@site/static/img/tutorial/citedrive_copy_citation.gif)\\n\\nPaste your citation key in the necessary passage of your Quarto document.\\n\\n![CiteDrive - Paste citationkey](@site/static/img/tutorial/citedrive_paste_citation_rstudio.gif)\\n\\n\\nAfter you insert the key in the section, click \u201crender.\u201d The citation will be outputted in your desired style, and the reference will appear at the end of your document.\\n\\nThat\'s all! CiteDrive is the perfect tool to help you manage your bibliography and insert citations into Quarto documents. Test it out now and see how much time it can save you!\\n\\n## Additional information\\n\\n### Quarto\\nQuarto is a powerful research writing tool that can automatically generate citations and bibliographies in various styles. It supports bibliography files in BibTeX and other formats, making it easy to keep track of your references.\\n\\n\\n### CiteDrive\\nCiteDrive is a reference management tool that allows you to organize, store easily, and search your bibliographic data. Organize your teams and references in projects, for example, for a dedicated Quarto paper. CiteDrive automatically keeps your references in Quarto up-to-date whenever you or one of your teammates updates the bibliographic data within your project.\\n\\nDo you prefer BibLaTeX? No problem, CiteDrive is 100 % BibTeX empowered and provides freedom in fields and types for each entry, meaning you can use any BibTeX-based package or alternative, like BibLaTeX."},{"id":"how-to-convert-a-doi-to-a-bibtex-citation-using-citedrive","metadata":{"permalink":"/de/blog/how-to-convert-a-doi-to-a-bibtex-citation-using-citedrive","editUrl":"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-16-doi-bibtex.md","source":"@site/i18n/de/docusaurus-plugin-content-blog/2022-08-16-doi-bibtex.md","title":"Wie man einen DOI in einem BibTeX-Eintrag mithilfe von CiteDrive umwandelt","description":"Wenn Sie ein Forscher sind, dann wissen Sie, wie wichtig Bibliographien und Zitate sind. Und wenn Sie CiteDrive verwenden, dann wissen Sie, dass es der einfachste Weg ist, Bibliografien und Zitate f\xfcr Ihre Forschungsarbeiten zu erstellen. Aber was tun Sie, wenn Sie auf einen DOI anstelle einer ISBN oder URL sto\xdfen? Keine Sorge - wir haben eine L\xf6sung f\xfcr Sie! In diesem Blogbeitrag zeigen wir Ihnen, wie Sie mit CiteDrive einen DOI in eine BibTeX-Zitierung umwandeln k\xf6nnen. Fangen wir an!","date":"2022-08-16T00:00:00.000Z","formattedDate":"16. August 2022","tags":[{"label":"citedrive","permalink":"/de/blog/tags/citedrive"},{"label":"bibtex","permalink":"/de/blog/tags/bibtex"},{"label":"doi","permalink":"/de/blog/tags/doi"}],"readingTime":1.61,"hasTruncateMarker":false,"authors":[{"name":"CiteDrive","title":"https://www.CiteDrive.com/","mail":"hello@citedrive.com","url":"https://www.CiteDrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],"frontMatter":{"slug":"how-to-convert-a-doi-to-a-bibtex-citation-using-citedrive","title":"Wie man einen DOI in einem BibTeX-Eintrag mithilfe von CiteDrive umwandelt","authors":{"name":"CiteDrive","title":"https://www.CiteDrive.com/","mail":"hello@citedrive.com","url":"https://www.CiteDrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},"tags":["citedrive","bibtex","doi"]},"prevItem":{"title":"How to Format Citations and Bibliographies in RStudio with CiteDrive and Quarto","permalink":"/de/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto"},"nextItem":{"title":"Zitate und Verweise auf Overleaf: Ein Leitfaden f\xfcr WissenschaftlerInnen","permalink":"/de/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers"}},"content":"Wenn Sie ein Forscher sind, dann wissen Sie, wie wichtig Bibliographien und Zitate sind. Und wenn Sie [CiteDrive](https://www.citedrive.com/) verwenden, dann wissen Sie, dass es der einfachste Weg ist, Bibliografien und Zitate f\xfcr Ihre Forschungsarbeiten zu erstellen. Aber was tun Sie, wenn Sie auf einen [DOI](/fields/doi/) anstelle einer ISBN oder URL sto\xdfen? Keine Sorge - wir haben eine L\xf6sung f\xfcr Sie! In diesem Blogbeitrag zeigen wir Ihnen, wie Sie mit CiteDrive einen DOI in eine BibTeX-Zitierung umwandeln k\xf6nnen. Fangen wir an!\\n\\n\\n\\n## Verwendung der Browsererweiterung\\nDie Umwandlung eines DOI in eine BibTeX-Zitierweise ist einfach, wenn Sie die Browsererweiterung \\"CiteDrive Companion\\" verwenden. Markieren Sie einfach den DOI mit der Maus, \xf6ffnen Sie das Kontextmen\xfc mit der rechten Maustaste und w\xe4hlen Sie \\"Search doi\\".\\n\\n![CiteDrive - Browsererweiterung suche nach DOI](@site/static/img/tutorial/browserextension-search-doi.png)\\n\\nDanach wird eine Vorschau des BibTeX-Eintrags angezeigt, in der Sie ihn \xe4ndern k\xf6nnen, bevor Sie ihn in einem Projekt Ihrer Wahl speichern.\\n\\n![CiteDrive - Browsererweiterung BibTeX-Vorschau](@site/static/img/tutorial/browserextension-bibtex-preview.png)\\n\\n\\n\\nDas war\'s! Sie finden den *Companion* in den folgenden Browsern:\\n\\n* [CiteDrive Companion Plugin f\xfcr Google Chrome](https://chrome.google.com/webstore/detail/citedrive-bibtex-companio/gmmonfphegngpcbcapfbgembkjeookik)\\n* [CiteDrive Companion Plugin f\xfcr Mozilla Firefox](https://addons.mozilla.org/af/firefox/addon/citedrive-companion/)\\n* [CiteDrive Companion Plugin f\xfcr Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/citedrive-bibtex-compan/kpmepfpbjehnlgfbcnbmgihklkkmfnpo)\\n\\n\\n## Verwendung des Online-Tools:\\nWenn Sie die Browsererweiterung nicht verwenden, k\xf6nnen Sie trotzdem CiteDrive nutzen, um Ihren DOI in eine BibTeX-Zitation umzuwandeln. Gehen Sie einfach auf die CiteDrive-Website und f\xfcgen Sie Ihren DOI in das Feld \\"Enter DOI\\" ein, das Sie unter Search via Doi finden, wenn Sie das Plus-Symbol in der oberen Navigationsleiste aufrufen. Dann klicken Sie auf die Schaltfl\xe4che \\"Konvertieren\\", und voila! - Ihr BibTeX-Zitat wird automatisch generiert.\\n\\n![CiteDrive - Suchmaschine in CiteDrive](@site/static/img/tutorial/citedrive-search-doi.png)\\n\\nWir hoffen, dass dieser Blogbeitrag f\xfcr Sie hilfreich war. Wenn Sie Fragen haben, z\xf6gern Sie bitte nicht, uns zu kontaktieren. Wir helfen Ihnen immer gerne weiter!\\n\\nCiteDrive ist der einfachste Weg, um Bibliographien und Zitate f\xfcr Ihre wissenschaftlichen Arbeiten zu erstellen. Konvertieren Sie noch heute eine DOI in eine BibTeX-Zitation mit CiteDrive! Testen Sie es kostenlos unter CiteDrive.com.\\n\\nViel Spa\xdf beim Zitieren! :)"},{"id":"citing-and-using-references-on-overleaf-a-guide-for-researchers","metadata":{"permalink":"/de/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers","editUrl":"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-12-overleaf-cite.md","source":"@site/i18n/de/docusaurus-plugin-content-blog/2022-08-12-overleaf-cite.md","title":"Zitate und Verweise auf Overleaf: Ein Leitfaden f\xfcr WissenschaftlerInnen","description":"Wenn Sie eine wissenschaftliche Arbeit schreiben, ist es wichtig, dass Sie Ihre Behauptungen durch Quellenangaben belegen. Die korrekte Zitierung Ihrer Quellen ist der Schl\xfcssel zu einer soliden Argumentation und zur Vermeidung von Plagiaten. In diesem Leitfaden erfahren Sie, wie Sie mit CiteDrive Referenzen auf Overleaf zitieren k\xf6nnen. Au\xdferdem geben wir Ihnen Tipps, wie Sie zuverl\xe4ssige Quellen im Internet finden. Los geht\'s!","date":"2022-08-12T00:00:00.000Z","formattedDate":"12. August 2022","tags":[{"label":"citedrive","permalink":"/de/blog/tags/citedrive"},{"label":"overleaf","permalink":"/de/blog/tags/overleaf"},{"label":"latex","permalink":"/de/blog/tags/latex"},{"label":"bibtex","permalink":"/de/blog/tags/bibtex"},{"label":"biblatex","permalink":"/de/blog/tags/biblatex"},{"label":"natbib","permalink":"/de/blog/tags/natbib"}],"readingTime":3.965,"hasTruncateMarker":false,"authors":[{"name":"CiteDrive","title":"https://www.citedrive.com/","url":"https://www.citedrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],"frontMatter":{"slug":"citing-and-using-references-on-overleaf-a-guide-for-researchers","title":"Zitate und Verweise auf Overleaf: Ein Leitfaden f\xfcr WissenschaftlerInnen","authors":{"name":"CiteDrive","title":"https://www.citedrive.com/","url":"https://www.citedrive.com/","image_url":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4","imageURL":"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},"tags":["citedrive","overleaf","latex","bibtex","biblatex","natbib"]},"prevItem":{"title":"Wie man einen DOI in einem BibTeX-Eintrag mithilfe von CiteDrive umwandelt","permalink":"/de/blog/how-to-convert-a-doi-to-a-bibtex-citation-using-citedrive"}},"content":"Wenn Sie eine wissenschaftliche Arbeit schreiben, ist es wichtig, dass Sie Ihre Behauptungen durch Quellenangaben belegen. Die korrekte Zitierung Ihrer Quellen ist der Schl\xfcssel zu einer soliden Argumentation und zur Vermeidung von Plagiaten. In diesem Leitfaden erfahren Sie, wie Sie mit CiteDrive Referenzen auf Overleaf zitieren k\xf6nnen. Au\xdferdem geben wir Ihnen Tipps, wie Sie zuverl\xe4ssige Quellen im Internet finden. Los geht\'s!\\n\\n\\n\\n## Schritt 1: CiteDrive mit Overleaf verbinden\\n\\nWenn Sie noch nicht bei [Overleaf](https://www.overleaf.com/) angemeldet sind, m\xfcssen Sie dies jetzt tun. Gehen Sie dann zu [CiteDrive](https://www.citedrive.com/), erstellen Sie ein Overleaf-Projekt und f\xfcgen Sie [Referenzen hinzuf\xfcgen](https://citedrive.medium.com/adding-bibliographic-references-to-overleaf-with-citedrive-325f131e3ca2) zu Ihrem neuen Projekt hinzu. Ihr Projekt k\xf6nnte wie folgt aussehen:\\n\\n![CiteDrive - Beispiel](@site/static/img/tutorial/citedrive_project_example.png)\\n\\nDanach klicken Sie auf \\"bib\\" oben links in Ihrem Projekt. Dadurch wird eine neue Registerkarte zur dynamischen BibTeX-Datei ge\xf6ffnet, die Sie f\xfcr Ihr Deckblatt verwenden k\xf6nnen und die automatisch aktualisiert wird, wenn Sie oder Ihre Teamkollegen Referenzen in Ihrem Projekt hinzuf\xfcgen, aktualisieren oder l\xf6schen.\\n\\nGehen Sie schlie\xdflich zu Overleaf, erstellen Sie eine neue Datei, w\xe4hlen Sie \\"From External URL\\" und f\xfcgen Sie die URL aus dem dynamischen BibTeX in \\"URL to fetch the file from\\" ein, nennen Sie sie hier *references.bib*.\\nIhr CiteDrive-Projekt ist nun mit Overleaf verbunden! Denken Sie daran, dass Sie auf Aktualisieren klicken m\xfcssen, wenn Sie \xc4nderungen in unserem CiteDrive-Projekt vornehmen, damit Overleaf den neuesten Stand erh\xe4lt.\\n\\n![Dateien zu Overleaf hinzuf\xfcgen](@site/static/img/tutorial/export_bib_to_overleaf.png)\\n\\n## Schritt 2: Erstellen eines TeX-Dokuments in Overleaf\\n\\nErstellen wir nun eine neue TeX-Datei f\xfcr Overleaf, die wir \\"document.tex\\" nennen k\xf6nnten, k\xf6nnen wir die Bibliographie, die BibTeX-Datei von CiteDrive mit `\\\\bibliography{references}` definieren. Aber welche Bibliographie-Tools sollten wir verwenden? F\xfcr die Verwaltung von Bibliographien in LaTeX/Overleaf gibt es viele M\xf6glichkeiten: am ehesten natbib, bibtex und biblatex. F\xfcr die Verwaltung von Bibliographien in LaTeX ist BibTeX die Grundlage f\xfcr das Format. Mit natbib wird BibTeX mit einer Erweiterung versehen, die mehr Gestaltungsfreiheit f\xfcr In-Text-Zitate bietet, und biblatex ist eine komplette \xdcberarbeitung von BibTeX, die mehr Referenztypen, Sortier- und Filteroptionen f\xfcr Bibliographien und Lokalisierungsoptionen bietet. W\xe4hrend BibteX das bekannteste Programm ist, ist BibLaTex nicht nur genauso robust, sondern auch das am meisten empfohlene Programm f\xfcr Neueinsteiger. Die Zitier- und bibliographischen Daten f\xfcr Referenzen und Listings werden in der sogenannten .bib-Datei gespeichert, genau wie in der BibTeX-Datei von CiteDrive. Sie hat immer das gleiche Format:\\n\\n ```latex\\n @article{smith201X,\\n \\ttitle        = {An interesting article},\\n \\tauthor       = {John Smith},\\n \\tyear         = {201X},\\n \\tjournal      = {Journal of Interesting Articles}\\n }\\n ```\\n\\n Hier ist `@article` der Quellentyp, `title`, `author`, `year` und `journal` die Attribute, die f\xfcr die Anzeige in Ihren Literaturlisten und Zitaten verwendet werden, und schlie\xdflich `smith201X`, ein eindeutiger Bezeichner, den Sie f\xfcr Referenzen in Ihrem Dokument verwenden k\xf6nnen, haupts\xe4chlich mit cite(key). CiteDrive ist nicht w\xe4hlerisch in Bezug auf das Format; jedes Feld und jeder Eintragstyp, der f\xfcr das bibliographische Paket Ihrer Wahl geeignet ist, wird akzeptiert. Da das grunds\xe4tzliche Ziel von CiteDrive die Trennung der bibliographischen Daten vom Dokument und den Zitierweisen ist, werden alle Alternativen von CiteDrive unterst\xfctzt.\\n\\n\\n Daher stellen wir Ihnen im Folgenden drei Vorlagen zur Verf\xfcgung, um Ihnen den Einstieg zu erleichtern.\\n\\n ### First steps with BibTeX:\\n\\n If you want to get started with BibTeX, use the following template or open Overleaf directly. For more information on BibTeX, see the documentation.\\n\\n ```latex title=\\"document.tex\\"\\n \\\\documentclass{article}\\n \\\\usepackage[utf8]{inputenc}\\n\\n \\\\title{BibTeX references in \\\\LaTeX}\\n \\\\author{John Smith}\\n\\n \\\\begin{document}\\n\\n \\\\maketitle\\n\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \\\\cite{Hemingway1952}\\n \\\\medskip\\n\\n \\\\bibliographystyle{unsrt}\\n \\\\bibliography{references}\\n\\n \\\\end{document}\\n ```\\n\\n\\n ### Erste Schritte mit natbib:\\n\\n ```latex\\n \\\\documentclass{article}\\n \\\\usepackage{natbib}\\n \\\\bibliographystyle{apalike}\\n \\\\title{A Short Guide to Reference Management using natbib with BibTeX}\\n \\\\author{CiteDrive}\\n \\\\date {January 1988}\\n\\n \\\\begin{document}\\n\\n \\\\maketitle\\n \\\\textbf{Narrative citation:} \\\\citet{Doe:1966} investigated the risks of incorrectly \\\\\\\\\\n recorded [...], which results in distortion.\\n \\\\textbf{Parenthetical citation:} The risks of incorrect recording of [...] could lead to distortion\\n \\\\citep{Doe:1966}.\\n\\n \\\\medskip\\n\\n \\\\bibliography{references}\\n\\n \\\\end{document}\\n\\n ```\\n\\n F\xfcr weitere Informationen \xfcber natbib klicken Sie bitte hier.\\n\\n ### Erste Schritte mit BibLaTeX.\\n\\n ```latex\\n \\\\documentclass{article}\\n \\\\usepackage{biblatex}\\n \\\\addbibresource{references.bib}\\n\\n \\\\begin{document}\\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \\\\cite{Hemingway1952}\\n \\\\medskip\\n\\n \\\\printbibliography\\n\\n \\\\end{document}\\n ```\\n\\n F\xfcr weitere Informationen zu BibLaTeX klicken Sie bitte hier.\\n\\n ## Schritt 3: In-Text-Zitate\\n\\n Wenn Sie die Browsererweiterung installiert haben, k\xf6nnen Sie Zitate erstellen, indem Sie den Text markieren und auf das CiteDrive-Symbol in Ihrer Symbolleiste klicken.\\n Sie k\xf6nnen Referenzen auch manuell mit dem Befehl cite zitieren. Wenn Sie z. B. Smith (201X) zitieren m\xf6chten, verwenden Sie \\"cite{smith201X}\\". Oder verwenden Sie die Referenzsuche in Overleaf.\\n Bibliographiestile sind in Overleaf vorinstalliert und je nachdem, welches Paket Sie verwendet haben, finden Sie auf den folgenden Seiten Verweise:\\n Das war\'s! Sie sollten nun alles haben, was Sie brauchen, um Referenzen in Overleaf zu verwenden. Bitte lassen Sie uns per E-Mail an hello@citedrive.com wissen, wenn Sie Fragen oder Anregungen haben.\\n\\n\\n\\n Viel Spa\xdf beim TeXen!"}]}')}}]);