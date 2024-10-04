import { useEffect, useState } from "react";
import SpeakerLine from "./SpeakerLine";
import axios from "axios";

function List({speakers, updateSpeaker}) {
  const [updatingId, setUpdatingId] = useState(0); // 1269;
  const isPending = false;
  // Updating state and then performing a REST call is what's known as an optimistic UI.
  function toggleFavoriteSpeaker(s) {
    const updated = { ...s, favorite: !s.favorite };
    updateSpeaker(updated);
    async function updateAsync(speaker) {
      setUpdatingId(speaker.id);
      await axios.put(`api/speakers/${speaker.id}`, updated);
      setUpdatingId(0);
    }
    updateAsync(updated);
  }

  return (
    <div className="container">
      <div className="border-0">
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Speaker toolbar filter"
        >
          <div className="toolbar-trigger mb-3 flex-grow-04">
            <div className="toolbar-search w-100">
              <input
                value=""
                onChange={(event) => {}}
                type="text"
                className="form-control"
                placeholder="Highlight Names"
              />
            </div>
            <div className="spinner-height">
              {isPending && (
                <i className="spinner-border text-dark" role="status" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        {speakers.map(s => {
          const highlight = false;
          return (
            <SpeakerLine
              key={s.id}
              speakerRec={s}
              updating={updatingId === s.id ? updatingId : 0}
              toggleFavoriteSpeaker={() => toggleFavoriteSpeaker(s)}
              highlight={highlight}
            />
          );
        })}
      </div>
    </div>
  );
}

// After component renders: (1) Call REST speakers URL. (2) Call setSpeakers to load speakers.
const SpeakerList = () => {
  const darkTheme = false;
  // An array of speakers.
  const [speakers, setSpeakers] = useState([]);
  // Have our speakers been loaded into component state?
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    async function getDataAsync() {
      setLoading(true);
      const results = await axios.get("/api/speakers");
      // When local component state updates, this will cause the component to re-render.
      setSpeakers(results.data);
      setLoading(false);
    }
    getDataAsync();
  }, []);
  // useEffect will not run again doe to this empty array.
  // It's function only runs once after the component renders.

  function updateSpeaker(speaker) {
    // New copy of the speaker array which includes
    const updated = speakers.map(s => {
      return speaker.id === s.id ? speaker : s;
    });
    setSpeakers(updated);
  }
  // Update state means "replace existing state with new state."

  if (loading) return <div>Loading...</div>;
  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <List speakers={speakers} updateSpeaker={updateSpeaker} />
    </div>
  );
};

export default SpeakerList;
