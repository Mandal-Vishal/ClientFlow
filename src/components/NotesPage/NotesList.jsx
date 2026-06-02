import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import NotesFilter from "./NotesFilter";

const NotesList = ({ notes, deleteNote, editNote }) => {
  const [page, setPage] = useState(1);
  const [filteredNote, setFilteredNote] = useState(notes);

  useEffect(() => {
    setFilteredNote(notes);
  }, [notes]);

  const recordsPerPage = 6;

  const lastIndex = recordsPerPage * page;
  const firstIndex = lastIndex - recordsPerPage;

  const currentRecords = filteredNote.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredNote.length / recordsPerPage);

  return (
    <div className="w-full pt-8">
      <NotesFilter
        filteredNote={filteredNote}
        setFilteredNote={setFilteredNote}
        notes={notes}
      />

      <div className="w-full rounded-xl">
        <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
          {currentRecords.map((note, idx) => {
            return (
              <div
                key={idx}
                className="
                                    w-full
                                    sm:w-[47%]
                                    xl:w-[31%]
                                    min-h-70
                                    border border-gray-200
                                    bg-white
                                    rounded-2xl
                                    p-5
                                    shadow-sm
                                    hover:shadow-md
                                    transition-all duration-200 ease-in-out
                                    hover:-translate-y-1
                                    flex flex-col justify-between
                                "
              >
                <div>
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 wrap-break-word">
                        {note.title}
                      </h3>
                      <h5 className="text-sm font-medium text-gray-400 mt-1">
                        {note.reference}
                      </h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="
                                                    w-9 h-9
                                                    flex items-center justify-center
                                                    rounded-full
                                                    text-gray-400
                                                    hover:bg-blue-50
                                                    hover:text-blue-600
                                                    transition
                                                "
                        onClick={() => {
                          editNote(note.id);
                        }}
                      >
                        <i className="ri-pencil-line text-lg"></i>
                      </button>
                      <button
                        className="
                                                    w-9 h-9
                                                    flex items-center justify-center
                                                    rounded-full
                                                    text-gray-400
                                                    hover:bg-red-50
                                                    hover:text-red-500
                                                    transition
                                                "
                        onClick={() => {
                          deleteNote(note.id);
                        }}
                      >
                        <i className="ri-delete-bin-line text-lg"></i>
                      </button>
                    </div>
                  </div>
                  <p
                    className="
                                            text-sm
                                            text-gray-600
                                            leading-6
                                            mt-5
                                            line-clamp-5
                                        "
                  >
                    {note.description}
                  </p>
                </div>
                <div
                  className="
                                        mt-5
                                        pt-4
                                        border-t border-gray-100
                                        flex items-center justify-between
                                    "
                >
                  <span className="text-sm text-gray-400">{note.date}</span>
                  <span
                    className="
                                            bg-green-100
                                            text-green-700
                                            text-xs
                                            font-medium
                                            px-3 py-1
                                            rounded-full
                                        "
                  >
                    Note
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {filteredNote.length === 0 && (
          <div
            className="
                            w-full
                            py-20
                            flex flex-col
                            items-center justify-center
                            text-center
                        "
          >
            <i className="ri-sticky-note-line text-5xl text-gray-300"></i>
            <h2 className="text-xl font-semibold text-gray-500 mt-4">
              No Notes Found
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Add your first note to get started
            </p>
          </div>
        )}
        <div
          className="
                        flex flex-col sm:flex-row
                        items-center justify-center
                        gap-4
                        px-4 sm:px-6
                        py-8
                    "
        >
          <button
            className={`
                            px-5 py-2
                            rounded-xl
                            text-white font-medium
                            transition-all duration-200
                            ${
                              page === 1
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-green-700 hover:bg-green-800"
                            }
                        `}
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Prev
          </button>

          <p className="text-sm font-medium text-gray-600">
            {page} / {totalPages || 1}
          </p>

          <button
            className={`
                            px-5 py-2
                            rounded-xl
                            text-white font-medium
                            transition-all duration-200
                            ${
                              page === totalPages || totalPages === 0
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-green-700 hover:bg-green-800"
                            }
                        `}
            disabled={page === totalPages || totalPages === 0}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesList;
