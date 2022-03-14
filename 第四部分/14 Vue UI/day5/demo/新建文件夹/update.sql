

UPDATE xzqa_author AS a INNER JOIN  (SELECT author_id,COUNT(id) AS count FROM xzqa_article GROUP BY author_id) AS b
on a.id = b.author_id SET article_number = count;