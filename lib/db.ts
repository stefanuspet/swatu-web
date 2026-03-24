import { neon } from "@neondatabase/serverless";
import type { PortfolioItem } from "@/lib/porto";

function getSQL() {
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) throw new Error("DATABASE_URL not set");
  return neon(url);
}

export async function getPorto(): Promise<PortfolioItem[]> {
  const sql = getSQL();

  const rows = await sql`
    SELECT *
    FROM portfolio
    ORDER BY created_at DESC
  `;

  return rows.map((r) => ({
    id: r.id,
    name: r.name,
    type: r.type,
    category: r.category,
    location: r.location,
    area: r.area,
    stories: r.stories,
    images: r.images,
  }));
}

export async function createPorto(data: PortfolioItem) {
  const sql = getSQL();

  await sql`
    INSERT INTO portfolio (
      id,
      name,
      type,
      category,
      location,
      area,
      stories,
      images
    )
    VALUES (
      ${data.id},
      ${data.name},
      ${data.type},
      ${data.category},
      ${data.location},
      ${data.area},
      ${data.stories},
      ${data.images}
    )
  `;
}

export async function updatePorto(id: string, data: Omit<PortfolioItem, "id">) {
  const sql = getSQL();

  await sql`
    UPDATE portfolio SET
      name = ${data.name},
      type = ${data.type},
      category = ${data.category},
      location = ${data.location},
      area = ${data.area},
      stories = ${data.stories},
      images = ${data.images}
    WHERE id = ${id}
  `;
}
export async function deletePorto(id: string) {
  const sql = getSQL();

  await sql`
    DELETE FROM portfolio
    WHERE id = ${id}
  `;
}
