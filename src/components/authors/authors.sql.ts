const base = `
select
	a.author_id,
	a.author_name,
	JSON_ARRAYAGG(b.title) as books
from authors a 
join book_authors ba on ba.author_id = a.author_id
join books b on b.book_id = ba.book_id
`;

export const list = `
${base}
group by a.author_id 
order by a.author_name
`;

export const get = `
${base}
where a.author_id = ?
group by a.author_id 
`;
