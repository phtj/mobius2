import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CustomMaterialModule } from './custom-angular-modules/CustomMaterialModule';
import { AngularSplitModule } from 'angular-split';
import { AceEditorModule } from 'ng2-ace-editor';
import { TreeModule } from 'angular-tree-component';

import { FlowchartService } from './global-services/flowchart.service';
import { LayoutService } from './global-services/layout.service'; 

/*import { ModuleService } from './global-services/module.service';
*/
import { FlowchartControlsComponent } from './ui-components/controls/flowchart-controls/flowchart-controls.component';
import { MenuComponent } from './ui-components/controls/main-menu/menu.component';

import { ProcedureEditorComponent } from './ui-components/editors/procedure-editor/procedure-editor.component';
import { ParameterEditorComponent } from './ui-components/editors/parameter-editor/parameter-editor.component';
import { ParameterSettingsDialogComponent } from './ui-components/editors/parameter-editor/parameter-settings-dialog.component';
import { FlowchartViewerComponent } from './ui-components/editors/flowchart-viewer/flowchart-viewer.component';

import { CodeViewerComponent } from './ui-components/viewers/code-viewer/code-viewer.component';
import { GeometryViewerComponent } from './ui-components/viewers/geometry-viewer/geometry-viewer.component';
import { ModuleViewerComponent } from './ui-components/viewers/module-viewer/module-viewer.component';
import { ParameterViewerComponent } from './ui-components/viewers/parameter-viewer/parameter-viewer.component';
import { ModuleboxComponent } from './ui-components/controls/modulebox/modulebox.component';
import { EditorComponent } from './ui-components/editors/editor/editor.component';
import { ViewerContainerComponent } from './ui-components/viewers/viewer-container/viewer-container.component';
import { TextViewerComponent } from './ui-components/viewers/text-viewer/text-viewer.component';
import { NodeLibraryComponent } from './ui-components/viewers/node-library/node-library.component';
import { PanelComponent } from './ui-components/layout/panel/panel.component';
import { ConsoleComponent } from './ui-components/console/console.component';

import { InfoViewerComponent } from './ui-components/help/info-viewer/info-viewer.component';
import { HelpViewerComponent } from './ui-components/help/help-viewer/help-viewer.component';
import { MobiusAbout, HelpFundamentals, HelpModel } from './ui-components/help/info-viewer/help.template';

import { GSViewer } from './gs-viewer/gs-viewer.module';
import { ConsoleService } from './global-services/console.service';

import { FileLoadDialogComponent } from './ui-components/dialogs/file-load-dialog.component';
import { GraphEdgeComponent } from './ui-components/graph/graph-edge/graph-edge.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FlowchartViewerComponent,
    CodeViewerComponent,
    GeometryViewerComponent,
    FlowchartControlsComponent,
    ModuleViewerComponent,
    ProcedureEditorComponent,
    ParameterViewerComponent,
    ParameterEditorComponent,
    ModuleboxComponent,
    EditorComponent,
    ViewerContainerComponent,
    TextViewerComponent,
    NodeLibraryComponent,
    PanelComponent,
    ConsoleComponent,
    ParameterSettingsDialogComponent,
    HelpViewerComponent,
    InfoViewerComponent,
    MobiusAbout, 
    HelpFundamentals,
    HelpModel,
    FileLoadDialogComponent,
    GraphEdgeComponent
  ],
  entryComponents: [
    ModuleboxComponent,
    ParameterSettingsDialogComponent,
    FileLoadDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    AceEditorModule,
    AngularSplitModule, 
    TreeModule,
    CustomMaterialModule,
    GSViewer
  ],
  providers: [FlowchartService, LayoutService, ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
