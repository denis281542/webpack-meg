import React from "react";
import { AttractionList } from './AttractionList'
import './attractions.scss'

export const Attractions = () => {
  return(<>
    <section className="attractions__wrapper">
      <div className="attractions">
        <div className="attractions-header">
          <h2 className="attractions-title">Аттракционы</h2>
          <p>кликните на аттракцион для получения подробностей</p>

          <AttractionList />

        </div>

      </div>
    </section>
  </>)
}