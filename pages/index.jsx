import Head from "next/head";
import { supabaseClient } from "../lib/supabase";

export default function Home({ doors }) {
  return (
    <div className="bg-gray-100 text-gray-700 min-h-screen ">
      <div className="max-w-6xl mx-auto  py-16">
        <h1 className="text-4xl ">Doors</h1>
        {doors.length > 0 ? (
          <div className="my-3 grid grid-cols-4 gap-3">
            {doors.map((door) => (
              <p
                className="p-6 border-b rounded-sm shadow-md bg-emerald-200"
                key={door.id}
              >
                {door.title}
              </p>
            ))}
          </div>
        ) : (
          <p>No door found.</p>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data: doors } = await supabaseClient
    .from("doors")
    .select(
      "id, created_at, title, description, opening_date, image_url, content_url,  authors(name, twitter_handle, website_url) "
    );

  return {
    props: {
      doors,
    },
    revalidate: 60 * 60,
  };
}
