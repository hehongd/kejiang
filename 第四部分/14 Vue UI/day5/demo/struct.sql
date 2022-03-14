USE xzqa;
CREATE TABLE xzqa_users(
	id MEDIUMINT UNSIGNED NOT NULL KEY AUTO_INCREMENT COMMENT '用户ID,主键且自增',
	username VARCHAR(30) NOT NULL UNIQUE COMMENT '用户名,唯一约束',
	password VARCHAR(32) NOT NULL COMMENT '密码,MD5',
	avatar   VARCHAR(50) NOT NULL COMMENT '用户头像'
);

INSERT xzqa_users(username,password,avatar) VALUES('tom',MD5('tom'),'33.jpg');
INSERT xzqa_users(username,password,avatar) VALUES('rose',MD5('rose'),'56.jpg');
INSERT xzqa_users(username,password,avatar) VALUES('frank',MD5('frank'),'63.jpg');
INSERT xzqa_users(username,password,avatar) VALUES('david',MD5('david'),'71.jpg');
INSERT xzqa_users(username,password,avatar) VALUES('ben',MD5('ben'),'102.jpg');


CREATE TABLE xzqa_comments(
	id INT UNSIGNED NOT NULL KEY AUTO_INCREMENT COMMENT '评论ID,主键且自增',
	content VARCHAR(255) NOT NULL COMMENT '评论内容',
	user_id MEDIUMINT UNSIGNED NOT NULL COMMENT '外键,参照users表',
	article_id INT UNSIGNED NOT NULL COMMENT '外键,参照articles',
	created_at INT UNSIGNED NOT NULL COMMENT '评论发表的日期和时间'
);

INSERT xzqa_comments(content,user_id,article_id,created_at) VALUES('估计特朗普下台后凶多吉少。',3,237,0);
INSERT xzqa_comments(content,user_id,article_id,created_at) VALUES('这是要清算大统领吗？',1,237,0);
INSERT xzqa_comments(content,user_id,article_id,created_at) VALUES('墙倒众人推啊，建国同志辛苦了',2,237,0);
INSERT xzqa_comments(content,user_id,article_id,created_at) VALUES('呵呵查吧查吧……我看热闹不嫌事儿大……',4,238,0);
INSERT xzqa_comments(content,user_id,article_id,created_at) VALUES('嗯。把底层人民当猪养啊。。。',1,238,0);
INSERT xzqa_comments(content,user_id,article_id,created_at) VALUES('非也！是当狗养！',3,238,0);
INSERT xzqa_comments(content,user_id,article_id,created_at) VALUES('真是把民众当成讨好美国的宠物啊',5,238,0);
INSERT xzqa_comments(content,user_id,article_id,created_at) VALUES('哪些金融机构可以配合地方政府变相举债？？？',2,238,0);