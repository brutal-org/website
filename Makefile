ARTICLES=$(wildcard articles/*.article)
ARTICLES_HTML=$(patsubst %.article, %.html, $(ARTICLES))

%.css: %.tw.css
	npx tailwindcss -i $< -o $@

articles/%.html: articles/%.article template/article_header.html template/article_footer.html
	cat template/article_header.html $< template/article_footer.html > $@


all: $(ARTICLES_HTML) style.css base.css

clean:
	rm -f $(ARTICLES_HTML) style.css base.css