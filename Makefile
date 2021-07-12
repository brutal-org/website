ARTICLES=$(wildcard articles/*.article)
ARTICLES_HTML=$(patsubst %.article, %.html, $(ARTICLES))

articles/%.html: articles/%.article
	cat template/article_header.html $^ template/article_footer.html > $@

all: $(ARTICLES_HTML)

clean:
	rm $(ARTICLES_HTML)