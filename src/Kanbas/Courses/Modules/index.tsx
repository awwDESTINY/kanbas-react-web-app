import React, { useState } from "react";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import { addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
const Modules = () => {
  const { cid } = useParams();
  const modules = useSelector((state: any) => state.modules.modules);
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState('');
    return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ModulesControls moduleName={moduleName} setModuleName={setModuleName} 
          addModule={() => {
            dispatch(addModule({ name: moduleName, course: cid }));
            setModuleName("");
          }}
        /><br/>
        <ul id="wd-modules" className="list-group rounded-0 ">
          {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3 " />
              {!module.editing && module.name}
              { module.editing && (
                <input className="form-control w-50 d-inline-block"
                       onChange={(e) => 
                        dispatch(
                          updateModule({ ...module, name: e.target.value })
                        )
                       }
                       onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          updateModule({ ...module, editing: false });
                        }
                      }}
                      value={module.name}
                />
              )}
              <ModuleControlButtons moduleId={module._id} 
                deleteModule={(moduleId) => {
                  dispatch(deleteModule(moduleId));
                }}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0 wd-padded-left wd-bg-color-green">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lessons list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}
export default Modules;