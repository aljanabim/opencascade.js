[![Build OpenCascade.js](https://github.com/donalffons/opencascade.js/actions/workflows/buildFull.yml/badge.svg?event=workflow_dispatch)](https://github.com/donalffons/opencascade.js/actions/workflows/buildFull.yml)
![OpenCascade Version](https://img.shields.io/badge/OpenCascade%20Version-7.6.2-green.svg)

<p align="center">
  <img src="https://github.com/donalffons/opencascade.js/raw/master/images/logo.svg" alt="Logo" width="50%">

  <h3 align="center">OpenCascade.js</h3>

  <p align="center">
    A port of the <a href="https://www.opencascade.com/">OpenCascade</a> CAD library to JavaScript and WebAssembly via Emscripten.
    <br />
    <a href="https://ocjs.org/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/donalffons/opencascade.js-examples">Examples</a>
    ·
    <a href="https://github.com/donalffons/opencascade.js/issues">Issues</a>
    ·
    <a href="https://github.com/donalffons/opencascade.js/discussions">Discuss</a>
  </p>
</p>

# Projects & Examples:

-   [ArchiYou](https://archiyou.com/): Library, Code-CAD Design Tool, Community Hub
-   [BitByBit](https://bitbybit.dev/): Code- & node-based - CAD Design Tool
-   [CascadeStudio](https://github.com/zalo/CascadeStudio): Library and Code-CAD Design Tool
-   [RepliCAD](https://replicad.xyz/): Library and Code-CAD Design Tool
-   [OpenCascade.js-examples](https://github.com/donalffons/opencascade.js-examples): Contains general examples on how to use the library.

# Custom build instructions

Build the docker image

```bash
docker build --pull --rm -f 'Dockerfile' -t 'ocjs-base' '.'
# the image below yields 2h faster image build however, all errors are not resolved and it leads to compilation errors further down the line
# docker build --pull --rm -f 'Dockerfile.custom' -t 'ocjs-base-arm' '.'
```

Create a YAML config file for the custom build. For a full build use the following

```yaml
mainBuild:
    name: opencascade.full.js

additionalCppCode: |
    typedef Handle(IMeshTools_Context) Handle_IMeshTools_Context;
    class OCJS {
    public:
      static Standard_Failure* getStandard_FailureData(intptr_t exceptionPtr) {
        return reinterpret_cast<Standard_Failure*>(exceptionPtr);
      }
    };
```

<details>
<summary>
For a custom build use:
</summary>

```yml
mainBuild:
    name: customBuild.examples.js
    bindings:
        - symbol: RWGltf_CafWriter
        - symbol: Standard_Transient
        - symbol: TCollection_AsciiString
        - symbol: Handle_TDocStd_Document
        - symbol: TDocStd_Document
        - symbol: CDM_Document
        - symbol: TColStd_IndexedDataMapOfStringString
        - symbol: Message_ProgressRange
        - symbol: TCollection_ExtendedString
        - symbol: XCAFDoc_DocumentTool
        - symbol: TDataStd_GenericEmpty
        - symbol: TDF_Attribute
        - symbol: XCAFDoc_ShapeTool
        - symbol: BRepMesh_IncrementalMesh
        - symbol: BRepMesh_DiscretRoot
        - symbol: BRepPrimAPI_MakeBox
        - symbol: BRepBuilderAPI_MakeShape
        - symbol: BRepBuilderAPI_Command
        - symbol: BRepPrimAPI_MakeSphere
        - symbol: BRepPrimAPI_MakeOneAxis
        - symbol: BRepAlgoAPI_Cut
        - symbol: BRepAlgoAPI_BooleanOperation
        - symbol: BRepAlgoAPI_BuilderAlgo
        - symbol: BRepAlgoAPI_Algo
        - symbol: gp_Trsf
        - symbol: gp_Vec
        - symbol: TopLoc_Location
        - symbol: BRepAlgoAPI_Fuse
        - symbol: TopoDS_Iterator
        - symbol: XCAFDoc_VisMaterialTool
        - symbol: Handle_XCAFDoc_VisMaterialTool
        - symbol: TDF_Attribute
        - symbol: XCAFDoc_VisMaterial
        - symbol: Handle_XCAFDoc_VisMaterial
        - symbol: XCAFDoc_VisMaterialPBR
        - symbol: Quantity_ColorRGBA
        - symbol: gp_Pnt
        - symbol: TopoDS_Shape
        - symbol: GC_MakeArcOfCircle
        - symbol: GC_Root
        - symbol: GC_MakeSegment
        - symbol: GC_MakeArcOfCircle
        - symbol: BRepBuilderAPI_MakeEdge
        - symbol: Geom_Curve
        - symbol: Geom_Geometry
        - symbol: Handle_Geom_Curve
        - symbol: BRepBuilderAPI_MakeWire
        - symbol: TopoDS_Edge
        - symbol: BRepBuilderAPI_Transform
        - symbol: BRepBuilderAPI_ModifyShape
        - symbol: TopoDS_Wire
        - symbol: BRepBuilderAPI_MakeFace
        - symbol: BRepPrimAPI_MakePrism
        - symbol: BRepPrimAPI_MakeSweep
        - symbol: BRepFilletAPI_MakeFillet
        - symbol: BRepFilletAPI_LocalOperation
        - symbol: ChFi3d_FilletShape
        - symbol: TopAbs_ShapeEnum
        - symbol: TopExp_Explorer
        - symbol: TDF_Label
        - symbol: TopoDS
        - symbol: gp
        - symbol: BRepPrimAPI_MakeCylinder
        - symbol: BRep_Tool
        - symbol: Geom_Surface
        - symbol: Handle_Geom_Surface
        - symbol: Handle_Geom_Plane
        - symbol: Geom_Plane
        - symbol: Geom_ElementarySurface
        - symbol: TopTools_ListOfShape
        - symbol: BRepOffsetAPI_MakeThickSolid
        - symbol: BRepOffsetAPI_MakeOffsetShape
        - symbol: BRepOffset_Mode
        - symbol: GeomAbs_JoinType
        - symbol: Geom_CylindricalSurface
        - symbol: gp_Pnt2d
        - symbol: gp_Dir2d
        - symbol: gp_Ax2d
        - symbol: Geom2d_Ellipse
        - symbol: Geom2d_Conic
        - symbol: Geom2d_Curve
        - symbol: Geom2d_TrimmedCurve
        - symbol: Geom2d_BoundedCurve
        - symbol: Handle_Geom2d_Curve
        - symbol: BRepLib
        - symbol: GeomAbs_Shape
        - symbol: BRepOffsetAPI_ThruSections
        - symbol: Handle_XCAFDoc_ShapeTool
        - symbol: TopoDS_Compound
        - symbol: BRep_Builder
        - symbol: gp_Ax1
        - symbol: NCollection_BaseMap
        - symbol: gp_Dir
        - symbol: Handle_Geom_TrimmedCurve
        - symbol: BRepBuilderAPI_MakePolygon
        - symbol: Geom_TrimmedCurve
        - symbol: Geom_BoundedCurve
        - symbol: TopoDS_Face
        - symbol: gp_Ax2
        - symbol: NCollection_BaseList
        - symbol: gp_Ax3
        - symbol: GCE2d_MakeSegment
        - symbol: Geom2d_Geometry
        - symbol: GCE2d_Root
        - symbol: Handle_Geom2d_TrimmedCurve
        - symbol: TopoDS_Builder
        - symbol: Test
    emccFlags:
        - -flto
        - -fexceptions
        - -sDISABLE_EXCEPTION_CATCHING=1
        - -O3
        - -sEXPORT_ES6=1
        - -sUSE_ES6_IMPORT_META=0
        - -sEXPORTED_RUNTIME_METHODS=['FS']
        - -sINITIAL_MEMORY=15MB
        - -sMAXIMUM_MEMORY=4GB
        - -sALLOW_MEMORY_GROWTH=1
        - -sLLD_REPORT_UNDEFINED
        - --no-entry
        - -sENVIRONMENT='web'

additionalCppCode: |
    #include <iostream>
    class Test {
    public:
      static int foo() {
        std::cout << "foo" << std::endl;
        return 123;
      }
    };
```

</details>

Start an instance of the container with config yaml file

```bash
cd build/[build-name]
docker run --rm -it -v "$(pwd):/src" -u "$(id -u):$(id -g)" ocjs-base config.yml
```

> TODO: try building with `donalffons/opencascade.js:2.0.0-beta.54fa06a`
> docker run --rm -it -v "$(pwd):/src" -u "$(id -u):$(id -g)" donalffons/opencascade.js:2.0.0-beta.54fa06a config.yml

# Contributing

Contributions are welcome! Feel free to have a look at the [todo-list](TODO.md) if you need some inspiration on what else needs to be done.
