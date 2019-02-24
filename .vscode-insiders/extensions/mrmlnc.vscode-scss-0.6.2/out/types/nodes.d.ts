export declare enum NodeType {
    Undefined = 0,
    Identifier = 1,
    Stylesheet = 2,
    Ruleset = 3,
    Selector = 4,
    SimpleSelector = 5,
    SelectorInterpolation = 6,
    SelectorCombinator = 7,
    SelectorCombinatorParent = 8,
    SelectorCombinatorSibling = 9,
    SelectorCombinatorAllSiblings = 10,
    Page = 11,
    PageBoxMarginBox = 12,
    ClassSelector = 13,
    IdentifierSelector = 14,
    ElementNameSelector = 15,
    PseudoSelector = 16,
    AttributeSelector = 17,
    Declaration = 18,
    Declarations = 19,
    Property = 20,
    Expression = 21,
    BinaryExpression = 22,
    Term = 23,
    Operator = 24,
    Value = 25,
    StringLiteral = 26,
    URILiteral = 27,
    EscapedValue = 28,
    Function = 29,
    NumericValue = 30,
    HexColorValue = 31,
    MixinDeclaration = 32,
    MixinReference = 33,
    VariableName = 34,
    VariableDeclaration = 35,
    Prio = 36,
    Interpolation = 37,
    NestedProperties = 38,
    ExtendsReference = 39,
    SelectorPlaceholder = 40,
    Debug = 41,
    If = 42,
    Else = 43,
    For = 44,
    Each = 45,
    While = 46,
    MixinContent = 47,
    Media = 48,
    Keyframe = 49,
    FontFace = 50,
    Import = 51,
    Namespace = 52,
    Invocation = 53,
    FunctionDeclaration = 54,
    ReturnStatement = 55,
    MediaQuery = 56,
    FunctionParameter = 57,
    FunctionArgument = 58,
    KeyframeSelector = 59,
    ViewPort = 60,
    Document = 61,
}
export interface INode {
    type: NodeType;
    offset: number;
    length: number;
    accept: (node: any) => boolean;
    getName: () => string;
    getValue: () => INode;
    getDefaultValue: () => INode;
    getText: () => string;
    getParameters: () => INode;
    getIdentifier: () => INode;
    getParent: () => INode;
    getChildren: () => INode[];
    getChild: (index: number) => INode;
    getSelectors: () => INode;
}